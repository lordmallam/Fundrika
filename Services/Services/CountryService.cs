
using Fundrika.Data;
using Fundrika_Services.Objects;
using Fundrika_Services.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Fundrika_Services.Services
{
    public class CountryService : ICountry
    {
        private FundRikaEntities db = new FundRikaEntities();
        private CommonService cs = new CommonService();

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
        
        public CountriesObj AddCountry(CountriesObj obj)
        {
            Country nItem = new Country();
            nItem.Name = obj.Name;
            nItem.URL = obj.URL;
            nItem.Icon = obj.Icon;
            nItem.Currency = obj.Currency;
            nItem.CurrencySymbol = obj.CurrencySymbol;
            try
            {
                var nObject = (Country)cs.Add(nItem);
                obj.Id = nObject.Id;
                return obj;
            }
            catch (Exception)
            {

                throw;
            }
            

        }

        public bool UpdateCountry(CountriesObj obj)
        {
            Country nItem = new Country();
            nItem.Name = obj.Name;
            nItem.URL = obj.URL;
            nItem.Icon = obj.Icon;
            nItem.CurrencySymbol = obj.CurrencySymbol;
            nItem.Currency = obj.Currency;
            nItem.Id = obj.Id;
            try
            {
                return cs.Update(nItem);
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        public bool DeleteCountry(CountriesObj dObj)
        {
            Country nItem = new Country();
            nItem.Id = dObj.Id;
            try
            {
                return cs.Delete(nItem);
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        public CountriesObj GetCountryByName(string name)
        {
            return db.Countries.Where(x => x.Name == name).Select(x => new CountriesObj
            {
                Id = x.Id,
                Name = x.Name,
                URL = x.URL,
                Currency = x.Currency,
                CurrencySymbol = x.CurrencySymbol,
                Icon = x.Icon
            }).FirstOrDefault();
        }
    }
}