import React from 'react';

import About from './frontpage/WhatIsMTT';
import WhoIsMTFor from './frontpage/WhoIsMTFor';
import Testimonials from './frontpage/Testimonials';
import ChooseMinistryFocus from './frontpage/ChooseMinistryFocus';
import ChooseTrainingStream from './frontpage/ChooseTrainingStream';
import ApplyNow from './frontpage/ApplyNow';
import RecommendedTrainingResources from './frontpage/RecommendedTrainingResources';



export default () => (
  <div id="front-page-container">
    <About />
    <WhoIsMTFor />
    <Testimonials />
    <ChooseMinistryFocus />
    <ChooseTrainingStream />
    <RecommendedTrainingResources />
    <ApplyNow />
  </div>
)
