import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillMail } from 'react-icons/ai';
// import { FooterBanner} from '../components';
import { useStateContext } from '../context/StateContext';


const Contact = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    
  }, []);

  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
            <AiFillMail />
            </p>
            <h2>Mail us for your queries</h2>
            <p className="email-msg">You can send us messege through this emial</p>
            <p className="description">
            If you have any questions, please write to
            <a className="email" href="mailto:order@techx.com">
                order@techx.com
            </a>
            </p>
            <Link href="/">
            <button type="button" width="300px" className="btn">
                Continue Shopping
            </button>
            </Link>
        </div>
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </div>
  );
  }
export default Contact