using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundrika_Services.Services.Interfaces
{
    public interface IAdmin
    {
        AdminsObj AddAdmin(AdminsObj obj);
        bool DeleteAdmin(AdminsObj obj);
        List<AdminsObj> GetAdmin();
        AdminsObj GetAdmin(int id);
        AdminsObj GetAdminByEmail(string email);
        bool UpdateAdmin(AdminsObj obj);
    }
}
