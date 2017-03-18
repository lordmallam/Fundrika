using Fundrika_Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fundrika_Services.Objects;
using Fundrika.Data;

namespace Fundrika_Services.Services
{
    public class PaymentTypeService : IPaymentType
    {
        private FundRikaEntities db = new FundRikaEntities();
        private CommonService cs = new CommonService();
        public PaymentTypesObj AddPaymentType(PaymentTypesObj obj)
        {
            PaymentType nItem = new PaymentType();
            nItem.Name = obj.Name;
            nItem.Description = obj.Description;
            nItem.Icon = obj.Icon;
            try
            {
                var nObject = (PaymentType)cs.Add(nItem);
                obj.Id = nObject.Id;
                return obj;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool DeletePaymentType(PaymentTypesObj obj)
        {
            PaymentType nItem = new PaymentType();
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

        public List<PaymentTypesObj> GetPaymentType()
        {
            return db.PaymentTypes.Select(x => new PaymentTypesObj
            {
                Id = x.Id,
                Name = x.Name,
                Icon = x.Icon,
                Description = x.Description
            }).ToList();
        }

        public PaymentTypesObj GetPaymentType(int id)
        {
            return db.PaymentTypes.Where(x => x.Id == id).Select(x => new PaymentTypesObj
            {
                Id = x.Id,
                Name = x.Name,
                Icon = x.Icon,
                Description = x.Description
            }).FirstOrDefault();
        }

        public PaymentTypesObj GetPaymentTypeByName(string name)
        {
            return db.PaymentTypes.Where(x => x.Name == name).Select(x => new PaymentTypesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Icon = x.Icon
            }).FirstOrDefault();
        }

        public bool UpdatePaymentType(PaymentTypesObj obj)
        {
            PaymentType nItem = new PaymentType();
            nItem.Name = obj.Name;
            nItem.Description = obj.Description;
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