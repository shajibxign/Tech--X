import React from 'react';
// import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import '../styles/Home.module.css'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <h1 className="logo">
        <a  href="/">TECH--X</a>
      </h1>

      <div className='navMenu'>
        <a className='button-24' href='/mobiles'>Mobiles</a>
        <a className='button-24' href='/campaigns'>Campaigns</a>
        <a className='button-24' href='/contact'>Contact us</a>
        {/* <a href='/accessories'>Accessories</a> */}
      </div>
      

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar