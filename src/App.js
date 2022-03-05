import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [contactSelected, setContacSelected] = useState(false);

  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
      

    </div>
  );
}

export default App;
