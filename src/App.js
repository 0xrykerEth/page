import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Summary />
    </React.Fragment>
  );
}

export default App;
