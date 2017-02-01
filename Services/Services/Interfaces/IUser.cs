using Fundrika.Data;
using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundrika_Services.Services.Interfaces
{
    public interface IUser
    {
        UsersObj AddUser(User obj);
        bool DeleteUser(int id);
        List<UsersObj> GetUser();
        UsersObj GetUser(int id);
        UsersObj UpdateUser(User obj);
        Task<UsersObj> AddUserAsync(User user);
    }
}
