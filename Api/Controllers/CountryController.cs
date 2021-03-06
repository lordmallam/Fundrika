﻿using Fundrika_Services.Objects;
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
    public class CountryController : ApiController
    {
        private ICountry countryService = new CountryService();

        public IEnumerable<CountriesObj> Get()
        {
            return countryService.GetCountry(); ;
        }

        [Authorize]
        public IHttpActionResult Get(int id)
        {
            var result = countryService.GetCountry(id);
            if (result != null)
                return Ok(result);
            return NotFound();

        }

        public IHttpActionResult Post(CountriesObj nObj)
        {
            var existRec = countryService.GetCountryByName(nObj.Name);
            if (existRec != null)
                return BadRequest("Record with same name exists.");
            try
            {
                var result = countryService.AddCountry(nObj);
                return Ok(result.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e.GetBaseException().Message);
            }

        }

        public IHttpActionResult Put(CountriesObj uObj)
        {
            var existRec = countryService.GetCountry(uObj.Id);
            if (existRec == null)
                return BadRequest("No such record to update.");
            try
            {
                var result = countryService.UpdateCountry(uObj);
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
            var existRec = countryService.GetCountry(id);
            if (existRec == null)
                return BadRequest("No such record to delete");
            try
            {
                var result = countryService.DeleteCountry(existRec);
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
