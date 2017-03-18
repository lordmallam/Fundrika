using Fundrika.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fundrika_Services.Services
{
    public class CommonService
    {
        private FundRikaEntities db = new FundRikaEntities();
        public bool Delete(object nItem)
        {
            try
            {
                db.Entry(nItem).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool Update(object uItem)
        {
            try
            {
                db.Entry(uItem).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public object Add(object aItem)
        {
            try
            {
                db.Entry(aItem).State = System.Data.Entity.EntityState.Added;
                db.SaveChanges();
                return aItem;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}