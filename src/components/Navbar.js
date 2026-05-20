import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <h1>ReactMeals</h1>
        </div>
        <div className='cart'>
            <button className="button">
            <span className="icon">🛒</span>
            <span>Your Cart</span>
            <span className="badge">0</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar