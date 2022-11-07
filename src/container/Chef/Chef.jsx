import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
  <div className="app__wrapper_img app__wrapper_img-reverse">
    <img src={images.cheftom} alt="cheftom_image" />
  </div>
  <div className="app__wrapper_info">
    <SubHeading title="Chef's word" />
    <h1 className="headtext__cormorant">What we believe in</h1>

    <div className="app__chef-content">
      <div className="app__chef-content_quote">
        <img src={images.quote} alt="quote_image" />
        <p className="p__opensans">Many restaurants have a mission statement, but not many restaurants have an excellent mission statement.</p>
      </div>
      <p className="p__opensans">We exist to connect local to each other through great tasting food while also supporting local farmers and utilizing the freshest ingredients.</p>
    </div>

    <div className="app__chef-sign">
      <p>Kabula Gad</p>
      <p className="p__opensans">Chef & Founder</p>
      <img src={images.signature} alt="signature_image" />
    </div>
  </div>
</div>
);

export default Chef;
