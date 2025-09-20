import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const MainLayout = () => {
  return (
    <>
      {/* Header Section */}
      <header>
        <Header />
      </header>

      {/* Main Section */}
      <main></main>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
