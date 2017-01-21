using Fundrika_Services.Objects;
using Fundrika_Services.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Fundrika_WebApi.Controllers
{
    public class CategoryController : ApiController
    {
        private CategoryService categoryService = new CategoryService();

        public IEnumerable<CategoriesObj> Get()
        {
            return categoryService.GetCategory(); ;
        }

        public IHttpActionResult Get(int id)
        {
            var result = categoryService.GetCategory(id);
            if (result != null)
                return Ok(result);
            return NotFound();

        }
    }
}
