import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Item from './components/Item';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Summary />
      <Item />
    </React.Fragment>
  );
}

export default App;
