import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('about')

  const changePage = () => {
    if(currentPage === 'about') {
      
      return <About />
    } else if (currentPage === 'portfolio') {
      return <Portfolio />
    } else if (currentPage === 'contact') {
      return <Contact />
    } else {
      return <About />
    }
  }

  return (
    <div className='container'>
      <Nav setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      <main>
        {changePage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;