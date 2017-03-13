using Fundrika.Data;
using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundrika_Services.Services.Interfaces
{
    public interface ICategory
    {
        CategoriesObj AddCategory(CategoriesObj obj);
        bool DeleteCategory(CategoriesObj obj);
        List<CategoriesObj> GetCategory();
        CategoriesObj GetCategory(int id);
        CategoriesObj GetCategoryByName(string name);
        bool UpdateCategory(CategoriesObj obj);
    }
}
