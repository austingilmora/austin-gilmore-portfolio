import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContacSelected] = useState(false);

  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
