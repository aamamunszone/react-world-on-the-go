import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Home from '../../pages/Home/Home';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header Section */}
      <header className='w-full py-2.5 sticky top-0 bg-white/50 backdrop-blur-lg shadow-lg z-50'>
        <Header />
      </header>

      {/* Main Section */}
      <main className='flex justify-center items-center flex-1 container mx-auto  my-8'>
        {/* Hero Section */}
        <section className='h-full'>
          <Home />
        </section>
      </main>

      {/* Footer Section */}
      <footer className='w-full bg-base-200 text-base-content'>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
