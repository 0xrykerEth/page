import React from 'react';
import './navbar.css';
import CartContext from './CartContext';

function Navbar(props) {
  const cartCtx = React.useContext(CartContext);
  return (
    <div className='navbar'>
        <div>
            <h1>ReactMeals</h1>
        </div>
        <div className='cart'>
            <button className="button" onClick={props.onOpen}>
            <span className="icon">🛒</span>
            <span>Your Cart</span>
            <span className="badge">{cartCtx.items.length}</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar