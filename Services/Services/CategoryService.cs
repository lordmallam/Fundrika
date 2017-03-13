using Fundrika.Data;
using Fundrika_Services.Objects;
using Fundrika_Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fundrika_Services.Services
{
    public class CategoryService: ICategory
    {
        private FundRikaEntities db = new FundRikaEntities();

        public CategoriesObj AddCategory(CategoriesObj obj)
        {
            Category nCategory = new Category();
            nCategory.Name = obj.Name;
            nCategory.Description = obj.Description;
            nCategory.Icon = obj.Icon;
            nCategory.Color = obj.Color;

            try
            {
                db.Categories.Add(nCategory);
                db.SaveChanges();
                obj.Id = nCategory.Id;
                return obj;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public bool DeleteCategory(CategoriesObj dObj)
        {
            Category nCategory = new Category();
            nCategory.Id = dObj.Id;

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

        public List<CategoriesObj> GetCategory()
        {
            Utility nUtility = new Utility();
            var results = db.Categories.Select(x => new CategoriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Color = x.Color,
                Icon = x.Icon
            }).ToList();

            foreach (var item in results)
            {
                if (item.Icon != null) {
                    item.Icon = nUtility.getThumbnail(item.Icon);
                }
            }
            return results;
        }

        public CategoriesObj GetCategory(int id)
        {
            return db.Categories.Where(x => x.Id == id).Select(x => new CategoriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Color = x.Color,
                Icon = x.Icon
            }).FirstOrDefault();
        }

        public CategoriesObj GetCategoryByName(string name)
        {
            return db.Categories.Where(x => x.Name == name).Select(x => new CategoriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Description = x.Description,
                Color = x.Color,
                Icon = x.Icon
            }).FirstOrDefault();
        }

        public bool UpdateCategory(CategoriesObj obj)
        {
            Category nCategory = new Category();
            nCategory.Name = obj.Name;
            nCategory.Description = obj.Description;
            nCategory.Icon = obj.Icon;
            nCategory.Color = obj.Color;
            nCategory.Id = obj.Id;
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