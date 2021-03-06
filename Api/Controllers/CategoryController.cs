﻿using Fundrika.Data;
using Fundrika_Services.Objects;
using Fundrika_Services.Services;
using Fundrika_Services.Services.Interfaces;
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
        private ICategory categoryService = new CategoryService();

        public IEnumerable<CategoriesObj> Get()
        {
            return categoryService.GetCategory();
        }

        public IHttpActionResult Get(int id)
        {
            var result = categoryService.GetCategory(id);
            if (result != null)
                return Ok(result);
            return NotFound();

        }

        //[Authorize]
        public IHttpActionResult Post(CategoriesObj nCategory)
        {
            var existRec = categoryService.GetCategoryByName(nCategory.Name);
            if (existRec != null)
                return BadRequest("Record with same name exists.");
            try
            {
                var result = categoryService.AddCategory(nCategory);
                return Ok(result.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e.GetBaseException().Message);
            }
            
        }

        public IHttpActionResult Put(CategoriesObj uCategory)
        {
            var existRec = categoryService.GetCategory(uCategory.Id);
            if (existRec == null)
                return BadRequest("No such record to update.");
            try
            {
                var result = categoryService.UpdateCategory(uCategory);
                if (result)
                    return Ok();
                else
                    return BadRequest();
            }
            catch (Exception e)
            {
                return BadRequest(e.GetBaseException().Message);
            }

        }

        public IHttpActionResult Delete(int id)
        {
            var existRec = categoryService.GetCategory(id);
            if (existRec == null)
                return BadRequest("No such record to delete");
            try
            {
                var result = categoryService.DeleteCategory(existRec);
                if (result)
                    return Ok();
                else
                    return BadRequest();
            }
            catch (Exception e)
            {
                return BadRequest(e.GetBaseException().Message);
            }
        }
    }
}
