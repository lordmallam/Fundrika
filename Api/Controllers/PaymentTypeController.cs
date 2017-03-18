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
    public class PaymentTypeController : ApiController
    {
        private IPaymentType paymentTypeService = new PaymentTypeService();

        public IEnumerable<PaymentTypesObj> Get()
        {
            return paymentTypeService.GetPaymentType(); ;
        }

        [Authorize]
        public IHttpActionResult Get(int id)
        {
            var result = paymentTypeService.GetPaymentType(id);
            if (result != null)
                return Ok(result);
            return NotFound();

        }

        public IHttpActionResult Post(PaymentTypesObj nObj)
        {
            var existRec = paymentTypeService.GetPaymentTypeByName(nObj.Name);
            if (existRec != null)
                return BadRequest("Record with same name exists.");
            try
            {
                var result = paymentTypeService.AddPaymentType(nObj);
                return Ok(result.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e.GetBaseException().Message);
            }

        }

        public IHttpActionResult Put(PaymentTypesObj uObj)
        {
            var existRec = paymentTypeService.GetPaymentType(uObj.Id);
            if (existRec == null)
                return BadRequest("No such record to update.");
            try
            {
                var result = paymentTypeService.UpdatePaymentType(uObj);
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
            var existRec = paymentTypeService.GetPaymentType(id);
            if (existRec == null)
                return BadRequest("No such record to delete");
            try
            {
                var result = paymentTypeService.DeletePaymentType(existRec);
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
