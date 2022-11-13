import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section_padding' id='home'>
    <div className='app__wrapper_info'>
      {<SubHeading title="Chase the new flavour" /> /*this value (title) passes dinamicaly to the SubHeading */}
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header image"></img>
    </div>
  </div>
);

export default Header;
