using Fundrika_Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Fundrika_Services.Objects;
using Fundrika.Data;

namespace Fundrika_Services.Services
{
    public class SubCategoryService : ISubCategory
    {
        private FundRikaEntities db = new FundRikaEntities();
        public SubCategoriesObj AddSubCategory(SubCategoriesObj obj)
        {
            SubCategory nCategory = new SubCategory();
            nCategory.Name = obj.Name;
            nCategory.Description = obj.Description;
            nCategory.Icon = obj.Icon;
            nCategory.Color = obj.Color;
            nCategory.CategoryId = obj.CategoryId;

            try
            {
                db.SubCategories.Add(nCategory);
                db.SaveChanges();
                obj.Id = nCategory.Id;
                return obj;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool DeleteSubCategory(SubCategoriesObj obj)
        {
            SubCategory nCategory = new SubCategory();
            nCategory.Id = obj.Id;

            try
            {
                db.Entry(nCategory).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<SubCategoriesObj> GetSubCategory()
        {
            Utility nUtility = new Utility();
            var results = db.SubCategories.Select(x => new SubCategoriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Color = x.Color,
                Icon = x.Icon,
                CategoryId = x.CategoryId,
                CategoryName = x.Category.Name

            }).ToList();

            foreach (var item in results)
            {
                if (item.Icon != null)
                {
                    item.Icon = nUtility.getThumbnail(item.Icon);
                }
            }
            return results;
        }

        public SubCategoriesObj GetSubCategory(int id)
        {
            return db.SubCategories.Where(x => x.Id == id).Select(x => new SubCategoriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Color = x.Color,
                Icon = x.Icon,
                CategoryId = x.CategoryId,
                CategoryName = x.Category.Name

            }).FirstOrDefault();
        }

        public List<SubCategoriesObj> GetSubCategoryByCategoryId(int id)
        {
            Utility nUtility = new Utility();
            var results = db.SubCategories.Where(x=>x.CategoryId==id).Select(x => new SubCategoriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Color = x.Color,
                Icon = x.Icon,
                CategoryId = x.CategoryId,
                CategoryName = x.Category.Name

            }).ToList();

            foreach (var item in results)
            {
                if (item.Icon != null)
                {
                    item.Icon = nUtility.getThumbnail(item.Icon);
                }
            }
            return results;
        }

        public SubCategoriesObj GetSubCategoryByName(string name)
        {
            return db.SubCategories.Where(x => x.Name == name).Select(x => new SubCategoriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Color = x.Color,
                Icon = x.Icon,
                CategoryId = x.CategoryId,
                CategoryName = x.Category.Name

            }).FirstOrDefault();
        }

        public bool UpdateCategory(SubCategoriesObj obj)
        {
            SubCategory nCategory = new SubCategory();
            nCategory.Name = obj.Name;
            nCategory.Description = obj.Description;
            nCategory.Icon = obj.Icon;
            nCategory.Color = obj.Color;
            nCategory.Id = obj.Id;
            nCategory.CategoryId = obj.CategoryId;

            try
            {
                db.Entry(nCategory).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}