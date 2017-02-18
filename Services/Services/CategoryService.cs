using Fundrika.Data;
using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fundrika_Services.Services
{
    public class CategoryService
    {
        private FundRikaEntities db = new FundRikaEntities();
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

    }
}