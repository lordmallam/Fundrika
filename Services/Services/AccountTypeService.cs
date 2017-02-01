using Fundrika_Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fundrika.Data;
using Fundrika_Services.Objects;

namespace Fundrika_Services.Services
{
    public class AccountTypeService : IAccountType
    {
        FundRikaEntities db = new FundRikaEntities();

        public AccountTypeObj AddAccountType(AccountType obj)
        {
            try
            {
                db.AccountTypes.Add(obj);
                db.SaveChanges();
                return (AccountTypeObj)obj;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool DeleteAccountType(int id)
        {
            var item = db.AccountTypes.Where(x => x.Id == id).FirstOrDefault();
            if (item != null)
            {
                try
                {
                    db.AccountTypes.Remove(item);
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

        public List<AccountTypeObj> GetAccountType()
        {
            return db.AccountTypes.Select(x => new AccountTypeObj {
                Id =x.Id,
                Name = x.Name
            }).ToList();
        }

        public AccountTypeObj GetAccountType(int id)
        {
            return db.AccountTypes.Where(x=>x.Id==id).Select(x => new AccountTypeObj
            {
                Id = x.Id,
                Name = x.Name
            }).FirstOrDefault();
        }

        public AccountTypeObj UpdateAccountType(AccountType obj)
        {
            var updateObj = db.AccountTypes.Find(obj.Id);
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
            return (AccountTypeObj)updateObj;
        }
    }
}