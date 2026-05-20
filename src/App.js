import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Item from './components/Item';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Navbar />
      <Summary />
      <Item />
    </React.Fragment>
  );
}

export default App;
