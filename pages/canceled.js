import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsFillCartXFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { Cancelutil } from '../lib/utils1';

const Cancelled = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    Cancelutil();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          < BsFillCartXFill {...{color: "red"}} />
        </p>
        <h2>PAYMENT FAILED</h2>
        <p className="email-msg">Your order has been cancelled!</p>
        <p className="description">
          press the button below to see more products. Mail us to
          <a className="email" href="mailto:order@techx.com">
            order@techx.com
          </a>, if you face any problem!
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cancelled