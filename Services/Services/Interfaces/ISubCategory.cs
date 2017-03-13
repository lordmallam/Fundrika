using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundrika_Services.Services.Interfaces
{
    public interface ISubCategory
    {
        SubCategoriesObj AddSubCategory(SubCategoriesObj obj);
        bool DeleteSubCategory(SubCategoriesObj obj);
        List<SubCategoriesObj> GetSubCategory();
        SubCategoriesObj GetSubCategory(int id);
        SubCategoriesObj GetSubCategoryByName(string name);
        List<SubCategoriesObj> GetSubCategoryByCategoryId(int id);
        bool UpdateCategory(SubCategoriesObj obj);
    }
}
