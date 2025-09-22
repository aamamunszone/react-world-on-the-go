import React, { Suspense } from 'react';
import Countries from '../../features/Countries/Countries';
import Banner from './Banner';

const fetchCountries = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  if (!res.ok) throw new Error('Failed to fetch countries.');
  return await res.json();
};

const countriesPromise = fetchCountries();

// console.log(countriesPromise);

const Home = () => {
  return (
    <section className="flex flex-col justify-between items-center gap-10">
      {/* Banner/Carousel Section */}
      <Banner />
      {/* Countries Section */}
      <Suspense
        fallback={
          <div className="w-full text-center text-[forestgreen] text-3xl font-bold py-10">
            <h1>
              <span className="loading loading-bars loading-3xl"></span>{' '}
              Countries Are Loading{' '}
              <span className="loading loading-bars loading-3xl"></span>
            </h1>
          </div>
        }
      >
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </section>
  );
};

export default Home;
