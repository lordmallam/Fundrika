using Fundrika.Data;
using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundrika_Services.Services.Interfaces
{
    public interface IAccountType
    {
        AccountTypeObj AddAccountType(AccountType obj);
        bool DeleteAccountType(int id);
        List<AccountTypeObj> GetAccountType();
        AccountTypeObj GetAccountType(int id);
        AccountTypeObj UpdateAccountType(AccountType obj);
    }
}
