
using Fundrika.Data;
using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fundrika_Services.Services
{
    public class CountryService
    {
        private FundRikaEntities db = new FundRikaEntities();

        public Country AddCountry(Country obj)
        {
            throw new NotImplementedException();
        }

        public bool DeleteCountry(int id)
        {
            throw new NotImplementedException();
        }

        public List<CountriesObj> GetCountry()
        {
            return db.Countries.Select(x => new CountriesObj
            {
                Id = x.Id,
                Name=x.Name,
                Icon=x.Icon,
                URL=x.URL,
                Currency=x.Currency,
                CurrencySymbol=x.CurrencySymbol
            }).ToList();
        }

        public CountriesObj GetCountry(int id)
        {
            return db.Countries.Where(x => x.Id == id).Select(x => new CountriesObj
            {
                Id = x.Id,
                Name = x.Name,
                Icon = x.Icon,
                URL = x.URL,
                Currency = x.Currency,
                CurrencySymbol = x.CurrencySymbol
            }).FirstOrDefault();            
        }

        public Country UpdateCountry(Country obj)
        {
            throw new NotImplementedException();
        }
    }
}