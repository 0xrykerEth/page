import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Item from './components/Item';
import Cart from './components/Cart';
import CartProvider from './components/CartProvider';

function App() {
  const [showCart,setShowCart] = useState(true);

  const hideCart = () => {
    setShowCart(false);
  }
  const showCardHandler =()=> {
    setShowCart(true);
  }

  return (
    <React.Fragment>
      <CartProvider>
      {showCart &&<Cart  onClose={hideCart}/>}
      <Navbar onOpen={showCardHandler}/>
      <Summary />
      <Item />
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
