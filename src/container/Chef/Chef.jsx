import React from 'react';

import { SubHeading, subHeading } from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className='headtext__cormorant'>What We Believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="chef quote" />
          <p className='p__opensans'>It is a long established fact that a reader will be distracted. </p>
        </div>
        <p className='p__opensans'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </div>
      <div className='app__chef-sign'>
          <p>Kevin Lou</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;
