import React from 'react';

import { MenuItem } from '../../components';
import { data, images } from '../../constants';
import './Meals.css';

const Meals = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu2">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Today&apos;s Special Meals</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_starters  flex__center">
        <p className="app__specialMenu-menu_heading">Starters</p>
        <div className="app__specialMenu_menu_items">
          {data.starters.map((starters, index) => (
            <MenuItem key={starters.title + index} title={starters.title} price={starters.price} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.steaks} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_dinner  flex__center">
        <p className="app__specialMenu-menu_heading">Dinner</p>
        <div className="app__specialMenu_menu_items">
          {data.dinner.map((dinner, index) => (
            <MenuItem key={dinner.title + index} title={dinner.title} price={dinner.price} />
          ))}
        </div>
      </div>
    </div>

  </div>
);

export default Meals;
