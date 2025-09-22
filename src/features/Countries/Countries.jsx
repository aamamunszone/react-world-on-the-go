import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  const [activeCountry, setActiveCountry] = useState(null);

  const handleToggle = (id) => {
    setActiveCountry((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto text-center flex flex-col justify-between items-center gap-10">
      <div className="w-full flex justify-evenly items-center text-3xl font-bold py-10">
        <h1 className="border border-dashed rounded-lg px-5 py-2.5">
          Total Country : {countries.length}
        </h1>
        <h1 className="border border-dashed rounded-lg px-5 py-2.5">
          Visited Country : {countries.length}
        </h1>
      </div>
      <div className="w-full mx-auto py-10  grid grid-cols-1 lg:grid-cols-4 gap-10 items-stretch">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            isActive={activeCountry === country.cca3.cca3}
            onToggle={() => handleToggle(country.cca3.cca3)}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
