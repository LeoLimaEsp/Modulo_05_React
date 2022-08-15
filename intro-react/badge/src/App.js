import React from 'react';
import Navbar from './componentes/Navbar';
import Badge from './componentes/badge';

function App() {
  return (
    <>
      <Navbar/>
      <Badge firstName="Leonel" lastName="Lima" jobTitle="Frontend" username="Leo23"/>
    </>
  );
}

export default App;
