/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';


import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">


  <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">34 North Road,Table View, South Africa</p>
      <p className="p__opensans">+27 678-481-696</p>
      <p className="p__opensans">+27 814-327-282</p>
    </div>

    <div className="app__footer-links_logo">
      <img src={images.luxury} alt="footer_logo" />
      <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
      <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>

    <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans">Monday-Friday:</p>
      <p className="p__opensans">09:00 am - 11:00 pm</p>
      <p className="p__opensans">Saturday-Sunday:</p>
      <p className="p__opensans">08:00 am - 11:00 pm</p>
    </div>
  </div>

  <div className="footer__copyright">
    <p className="p__opensans">2022 Luxury. All Rights reserved.</p>
  </div>

</div>
);

export default Footer;
