import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Restaurant Luxury draws in visitor’s attention with its clean and modern restaurant website design. we gives customers a taste of its food, drinks, and venue by making clever use of a gallery layout on its homepage. These high-quality images also complement the overall color scheme to create a unified design across the webpage.</p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We started no longer ago early this year, luxury Corporation is a franchise varity restaurant chain originating from South Africa with a focus on family dining. The head office of luxury Corporation is situated in Table View, Cape Town</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
