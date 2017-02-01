using Fundrika_Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fundrika.Data;
using Fundrika_Services.Objects;
using Okra.Security;
using Fundrika_Services.Configuration;
using System.Threading.Tasks;
using System.Security.Claims;

namespace Fundrika_Services.Services
{
    public class UserService : IUser
    {
        FundRikaEntities db = new FundRikaEntities();
        public UsersObj AddUser(User obj)
        {
            Security sc = new Security();
            obj.Password = sc.Encrypt(obj.Password, Config.SecretKey);
            obj.Created = DateTime.Now;
            obj.ActivationCode = sc.getRandomKey(128);
            obj.Status = "Registering";
            obj.IsActive = false;
            obj.UserAccountTypes.Add(new UserAccountType{
                AccountTypeId = db.AccountTypes.Where(x => x.Name == "User").FirstOrDefault().Id
            });
            try
            {
                db.Users.Add(obj);
                db.SaveChanges();
                return (UsersObj)obj;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool DeleteUser(int id)
        {
            var item = db.Users.Where(x => x.Id == id).FirstOrDefault();
            if (item != null)
            {
                try
                {
                    db.Users.Remove(item);
                    db.SaveChanges();
                    return true;
                }
                catch (Exception)
                {

                    throw;
                }

            }
            else
            {
                return false;
            }
        }

        public List<UsersObj> GetUser()
        {
            return db.Users.Select(x => new UsersObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Icon = x.Icon,
                OrgCode = x.OrgCode,
                Address = x.Address,
                Phone = x.Phone,
                Email = x.Email,
                LoginType = x.LoginType,
                LoginCode = x.LoginCode,
                ContactPerson = x.ContactPerson,
                Bank = x.Bank,
                AccountNumber = x.AccountNumber,
                AccountName = x.AccountName,
                SwiftCode = x.SwiftCode,
                Currency = x.Currency,
                Created = x.Created,
                Status = x.Status,
                IsActive = x.IsActive,
                ActivationCode = x.ActivationCode,
                CountryId = x.CountryId
            }).ToList();
        }

        public UsersObj GetUser(int id)
        {
            return db.Users.Where(x=>x.Id==id).Select(x => new UsersObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Icon = x.Icon,
                OrgCode = x.OrgCode,
                Address = x.Address,
                Phone = x.Phone,
                Email = x.Email,
                LoginType = x.LoginType,
                LoginCode = x.LoginCode,
                ContactPerson = x.ContactPerson,
                Bank = x.Bank,
                AccountNumber = x.AccountNumber,
                AccountName = x.AccountName,
                SwiftCode = x.SwiftCode,
                Currency = x.Currency,
                Created = x.Created,
                Status = x.Status,
                IsActive = x.IsActive,
                ActivationCode = x.ActivationCode,
                CountryId = x.CountryId
            }).FirstOrDefault();
        }

        public UsersObj UpdateUser(User obj)
        {
            var updateObj = db.Users.Find(obj.Id);
            if (updateObj != null)
            {
                try
                {
                    updateObj = obj;
                    db.SaveChanges();
                }
                catch (Exception)
                {

                    throw;
                }

            }
            return (UsersObj)updateObj;
        }

        public async Task<UsersObj> Authenticate(string username, string password)
        {
            Security sc = new Security();
            var pw = sc.Encrypt(password, Config.SecretKey);
            return db.Users.Where(x => x.Email== username &&  x.Password == pw).Select(x => new UsersObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Icon = x.Icon,
                OrgCode = x.OrgCode,
                Address = x.Address,
                Phone = x.Phone,
                Email = x.Email,
                LoginType = x.LoginType,
                LoginCode = x.LoginCode,
                ContactPerson = x.ContactPerson,
                Bank = x.Bank,
                AccountNumber = x.AccountNumber,
                AccountName = x.AccountName,
                SwiftCode = x.SwiftCode,
                Currency = x.Currency,
                Created = x.Created,
                Status = x.Status,
                IsActive = x.IsActive,
                ActivationCode = x.ActivationCode,
                CountryId = x.CountryId,
                AccountTypes = x.UserAccountTypes.Select(r => new AccountTypeObj {
                    Name = r.AccountType.Name
                }).ToList()
            }).FirstOrDefault();
        }

        public async Task<UsersObj> AddUserAsync(User user)
        {
           return AddUser(user);
        }


        public List<AccountTypeObj> getUserAccountRoles(UsersObj obj)
        {
            List<AccountTypeObj> result = new List<AccountTypeObj>();
            var uat = db.UserAccountTypes.Where(x => x.UserId == obj.Id).ToList();
            if (uat.Count > 0)
            {
                foreach (var item in uat)
                {
                    result.Add((AccountTypeObj)item.AccountType);
                }
            }

            return result;
        }

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UsersObj user, string authenticationType)
        {
            var oAuthIdentity = new ClaimsIdentity(authenticationType);
            oAuthIdentity.AddClaim(new Claim(ClaimTypes.Name, user.Name));
            oAuthIdentity.AddClaim(new Claim("Username", user.Email));
            var roles = getUserAccountRoles(user);
            foreach (var item in roles)
            {
                oAuthIdentity.AddClaim(new Claim(ClaimTypes.Role, item.Name));
            }
            
            return oAuthIdentity;
        }
    }
}