import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Home from '../../pages/Home/Home';

const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between items-center">
      {/* Header Section */}
      <header className="w-full py-2.5 bg-white/50 sticky top-0  backdrop-blur-md shadow-md z-50">
        <Header />
      </header>

      {/* Main Section */}
      <main className="w-full bg-base-200">
        <Home />
      </main>

      {/* Footer Section */}
      <footer className="w-full py-2.5 bg-[lightgray]">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
