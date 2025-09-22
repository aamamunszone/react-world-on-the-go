import React, { useState } from 'react';

const Country = ({ country, isActive, onToggle }) => {
  //   console.log(country);
  const {
    name,
    ccn3,
    currencies,
    capital,
    region,
    languages,
    area,
    cca3,
    population,
    continents,
    flags,
  } = country;

  const [visited, SetVisited] = useState(false);
  const bigCountry = area.area;

  const handleNotVisitedClick = () => {
    // console.log('Not Visited Button Clicked.');
    SetVisited((prev) => !prev);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-fit flex flex-col">
        {/* Flag & Header */}
        <div
          className={`flex flex-col justify-between items-center gap-2.5 pb-2.5 ${
            visited && 'bg-[aquamarine]'
          }`}
        >
          {/* Flag */}
          <img
            src={flags?.flags?.png}
            alt={flags?.flags?.alt || 'N/A'}
            className="w-full h-36 object-cover"
          />
          {/* Header */}
          <div className="w-full px-2.5 space-y-1.5">
            <h2
              className="text-xl font-bold text-gray-800 hover:text-[forestgreen] hover:underline underline-offset-4 cursor-pointer"
              onClick={onToggle}
            >
              {name?.common}
            </h2>
            <h3 className="text-md font-medium text-gray-700">
              Official: {name?.official}
            </h3>
            <p className="text-[12px] text-gray-500">
              CCA3: {cca3?.cca3 || 'N/A'} / CCN3: {ccn3?.ccn3 || 'N/A'}
            </p>
          </div>
          {/* Visited/Not Visited Button */}
          <div className="w-full flex justify-between items-center px-2.5 text-left">
            <button
              className="btn btn-neutral btn-sm"
              onClick={handleNotVisitedClick}
            >
              {visited ? 'Visited' : 'Not Visited'}
            </button>
            <div className="badge badge-info">
              <svg
                className="size-[1em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  fill="currentColor"
                  strokeLinejoin="miter"
                  strokeLinecap="butt"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></path>
                  <circle
                    cx="12"
                    cy="7.25"
                    r="1.25"
                    fill="currentColor"
                    strokeWidth="2"
                  ></circle>
                </g>
              </svg>
              {bigCountry >= 300000 ? 'Big Country' : 'Small Country'}
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            isActive
              ? 'max-h-[600px] opacity-100 p-2.5'
              : 'max-h-0 opacity-0 p-0'
          } bg-base-300`}
        >
          {/* Info Grid */}
          <div className="mt-2 text-gray-700 text-sm grid grid-cols-2 gap-2">
            <p>
              <span className="font-semibold">Capital:</span>{' '}
              {capital?.capital || 'N/A'}
            </p>
            <p>
              <span className="font-semibold">Region:</span>{' '}
              {region?.region || 'N/A'}
            </p>
            <p>
              <span className="font-semibold">Continent:</span>{' '}
              {continents?.continents || 'N/A'}
            </p>
            <p>
              <span className="font-semibold">Population:</span>{' '}
              {population?.population.toLocaleString() || 'N/A'}
            </p>
            <p className="col-span-2 text-center mb-5">
              <span className="font-semibold">Area:</span>{' '}
              {area?.area.toLocaleString() || 'N/A'} km²
            </p>
            <p className="col-span-2 text-center">
              <span className="font-semibold">Languages:</span>{' '}
              {languages
                ? Object.values(languages.languages).join(', ')
                : 'N/A'}
            </p>
            <p className="col-span-2">
              <span className="font-semibold">Currency:</span>{' '}
              {currencies?.currencies
                ? Object.values(currencies.currencies)
                    .map(
                      (curr) =>
                        `${curr.name || 'N/A'} (${curr.symbol || 'N/A'})`
                    )
                    .join(', ')
                : 'N/A'}
            </p>
          </div>

          {/* Footer / optional */}
          <div className="mt-3">
            <p className="text-xs text-gray-400">
              Data from Programming Hero API
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
