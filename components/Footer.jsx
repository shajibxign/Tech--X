import React from 'react';
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 TECHX -- All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter/>
        <AiFillFacebook />
      </p>
    </div>
  )
}

export default Footer