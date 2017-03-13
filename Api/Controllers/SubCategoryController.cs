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
    public class SubCategoryController : ApiController
    {
        private ISubCategory subCategoryService = new SubCategoryService();

        public IEnumerable<SubCategoriesObj> Get()
        {
            return subCategoryService.GetSubCategory();
        }

        public IHttpActionResult Get(int id)
        {
            var result = subCategoryService.GetSubCategory(id);
            if (result != null)
                return Ok(result);
            return NotFound();

        }

        public IHttpActionResult GetByCategory(int id)
        {
            var result = subCategoryService.GetSubCategoryByCategoryId(id);
            if (result != null)
                return Ok(result);
            return NotFound();

        }

        //[Authorize]
        public IHttpActionResult Post(SubCategoriesObj nCategory)
        {
            var existRec = subCategoryService.GetSubCategoryByName(nCategory.Name);
            if (existRec != null)
                return BadRequest("Record with same name exists.");
            try
            {
                var result = subCategoryService.AddSubCategory(nCategory);
                return Ok(result.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e.GetBaseException().Message);
            }

        }

        public IHttpActionResult Put(SubCategoriesObj uCategory)
        {
            var existRec = subCategoryService.GetSubCategory(uCategory.Id);
            if (existRec == null)
                return BadRequest("No such record to update.");
            try
            {
                var result = subCategoryService.UpdateCategory(uCategory);
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
            var existRec = subCategoryService.GetSubCategory(id);
            if (existRec == null)
                return BadRequest("No such record to delete");
            try
            {
                var result = subCategoryService.DeleteSubCategory(existRec);
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
