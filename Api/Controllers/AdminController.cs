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
    public class AdminController : ApiController
    {
        private IAdmin adminService = new AdminService();

        public IEnumerable<AdminsObj> Get()
        {
            return adminService.GetAdmin(); ;
        }

        [Authorize]
        public IHttpActionResult Get(int id)
        {
            var result = adminService.GetAdmin(id);
            if (result != null)
                return Ok(result);
            return NotFound();

        }

        public IHttpActionResult Post(AdminsObj nObj)
        {
            var existRec = adminService.GetAdminByEmail(nObj.Email);
            if (existRec != null)
                return BadRequest("A user with the same email exists.");
            try
            {
                var result = adminService.AddAdmin(nObj);
                return Ok(result.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e.GetBaseException().Message);
            }

        }

        public IHttpActionResult Put(AdminsObj uObj)
        {
            var existRec = adminService.GetAdmin(uObj.Id);
            if (existRec == null)
                return BadRequest("No such record to update.");
            try
            {
                var result = adminService.UpdateAdmin(uObj);
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
            var existRec = adminService.GetAdmin(id);
            if (existRec == null)
                return BadRequest("No such record to delete");
            try
            {
                var result = adminService.DeleteAdmin(existRec);
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
