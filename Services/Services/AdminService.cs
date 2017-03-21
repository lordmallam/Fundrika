using Fundrika_Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fundrika_Services.Objects;
using Fundrika.Data;
using Okra.Security;
using Fundrika_Services.Configuration;

namespace Fundrika_Services.Services
{
    public class AdminService : IAdmin
    {
        private FundRikaEntities db = new FundRikaEntities();
        private CommonService cs = new CommonService();
        private Security sec = new Security();
        public AdminsObj AddAdmin(AdminsObj obj)
        {
            Admin nItem = new Admin();
            nItem.Name = obj.Name;
            nItem.Address = obj.Address == null ? "unknown" : obj.Address;
            nItem.ActivationCode = sec.getRandomKey(128);
            nItem.Created = DateTime.Now;
            nItem.CreatedBy = obj.CreatedBy;
            nItem.Email = obj.Email;
            nItem.IsActive = obj.IsActive;
            nItem.Password = sec.Encrypt(obj.Password, Config.SecretKey);
            nItem.Phone = obj.Phone;
            nItem.Status = obj.Status;
            nItem.Type = obj.Type;
            nItem.Icon = obj.Icon;
            try
            {
                var nObject = (Admin)cs.Add(nItem);
                obj.Id = nObject.Id;
                return obj;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool DeleteAdmin(AdminsObj obj)
        {
            Admin nItem = new Admin();
            nItem.Id = obj.Id;
            try
            {
                return cs.Delete(nItem);
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<AdminsObj> GetAdmin()
        {
            return db.Admins.Select(x => new AdminsObj
            {
                Id = x.Id,
                Name = x.Name,
                Icon = x.Icon,
                Address = x.Address,
                Phone = x.Phone,
                Email= x.Email,
                Created = x.Created,
                Status = x.Status,
                IsActive = x.IsActive,
                ActivationCode = x.ActivationCode,
                Type = x.Type,
                CreatedBy = x.CreatedBy
            }).ToList();
        }

        public AdminsObj GetAdmin(int id)
        {
            return db.Admins.Where(x => x.Id == id).Select(x => new AdminsObj
            {
                Id = x.Id,
                Name = x.Name,
                Icon = x.Icon,
                Address = x.Address,
                Phone = x.Phone,
                Email = x.Email,
                Created = x.Created,
                Status = x.Status,
                IsActive = x.IsActive,
                ActivationCode = x.ActivationCode,
                Type = x.Type,
                CreatedBy = x.CreatedBy
            }).FirstOrDefault();
        }

        public AdminsObj GetAdminByEmail(string email)
        {
            return db.Admins.Where(x => x.Email == email).Select(x => new AdminsObj
            {
                Id = x.Id,
                Name = x.Name,
                Icon = x.Icon,
                Address = x.Address,
                Phone = x.Phone,
                Email = x.Email,
                Created = x.Created,
                Status = x.Status,
                IsActive = x.IsActive,
                ActivationCode = x.ActivationCode,
                Type = x.Type,
                CreatedBy = x.CreatedBy
            }).FirstOrDefault();
        }

        public bool UpdateAdmin(AdminsObj obj)
        {
            Admin nItem = new Admin();
            nItem.Name = obj.Name;
            nItem.Address = obj.Address == null ? "unknown" : obj.Address;
            nItem.ActivationCode = sec.getRandomKey(128);
            nItem.Created = DateTime.Now;
            nItem.CreatedBy = obj.CreatedBy;
            nItem.Email = obj.Email;
            nItem.IsActive = obj.IsActive;
            nItem.Password = sec.Encrypt(obj.Password, Config.SecretKey);
            nItem.Phone = obj.Phone;
            nItem.Status = obj.Status;
            nItem.Type = obj.Type;
            nItem.Icon = obj.Icon;
            nItem.Id = obj.Id;
            try
            {
                return cs.Update(nItem);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}