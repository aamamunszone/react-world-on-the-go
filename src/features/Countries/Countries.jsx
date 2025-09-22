import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  const [activeCountry, setActiveCountry] = useState(null);
  const [visitedCountries, SetVisitedCountries] = useState([]);
  const [favFlags, setFavFlags] = useState([]);

  const handleToggle = (id) => {
    setActiveCountry((prev) => (prev === id ? null : id));
  };

  const handleVisitedCountries = (country) => {
    // console.log('Visited Country Clicked ', country);
    const newVisitedCountries = [...visitedCountries, country];
    console.log(newVisitedCountries);
    SetVisitedCountries(newVisitedCountries);
  };

  const handleFavFlags = (flagImg) => {
    // console.log('Favorite Button Clicked.');
    setFavFlags([...favFlags, flagImg])

  }

  return (
    <div className="container mx-auto text-center flex flex-col justify-between items-center gap-10">
      <div className="w-full flex justify-evenly items-center text-3xl font-bold py-10">
        <h1 className="border border-dashed rounded-lg px-5 py-2.5">
          Total Country : {countries.length}
        </h1>
        <h1 className="border border-dashed rounded-lg px-5 py-2.5">
          Visited Country : {visitedCountries.length}
        </h1>
      </div>
      <div className="w-full mx-auto py-10  grid grid-cols-1 lg:grid-cols-4 gap-10 items-stretch">
        <div className='col-span-3 grid grid-cols-3 gap-10'>
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            isActive={activeCountry === country.cca3.cca3}
            onToggle={() => handleToggle(country.cca3.cca3)}
            handleVisitedCountries={handleVisitedCountries}
            handleFavFlags={handleFavFlags}
          />
        ))}
        </div>
        <div className='col-span-1 space-y-5'>
          <div>
          <h1 className="border border-dashed rounded-lg px-5 py-2.5 mb-2.5">Visited Country Name</h1>
          <ol className='list-decimal list-inside border rounded-2xl p-2.5'>
            {visitedCountries.map((country) => <li className='my-1 py-1 text-[forestgreen]' key={country.cca3.cca3}>{ country.name.common}</li>)}
          </ol>
          </div>
          <div>
          <h1 className="border border-dashed rounded-lg px-5 py-2.5 mb-2.5">Favorite Flags</h1>
            <div className='border rounded-2xl p-2.5 grid grid-cols-3 gap-2.5'>
              {favFlags.map((image, index) => <img key={index} src={image} className='w-[100px] h-[60px] rounded-xl'></img>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
