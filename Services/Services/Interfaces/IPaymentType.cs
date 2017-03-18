using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundrika_Services.Services.Interfaces
{
    public interface IPaymentType
    {
        PaymentTypesObj AddPaymentType(PaymentTypesObj obj);
        bool DeletePaymentType(PaymentTypesObj obj);
        List<PaymentTypesObj> GetPaymentType();
        PaymentTypesObj GetPaymentType(int id);
        PaymentTypesObj GetPaymentTypeByName(string name);
        bool UpdatePaymentType(PaymentTypesObj obj);
    }
}
