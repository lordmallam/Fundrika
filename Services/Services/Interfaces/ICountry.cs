using Fundrika.Data;
using Fundrika_Services.Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fundrika_Services.Services.Interfaces
{
    public interface ICountry
    {
        CountriesObj AddCountry(Country obj);
        bool DeleteCountry(int id);
        List<CountriesObj> GetCountry();
        CountriesObj GetCountry(int id);
        CountriesObj UpdateCountry(Country obj);
    }
}
