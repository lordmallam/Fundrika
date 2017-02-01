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
    }
}
