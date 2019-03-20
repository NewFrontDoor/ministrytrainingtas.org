import React from 'react';
import splash from '../../../images/Cover HQ.jpg';

export default () => (
  <header id="fullwidth" className="homepage" style={{ 'backgroundImage': `url('${splash}')` }}>
    <div className="header-text white text-center text-uppercase">
      <h1 className="titlebg pddn-20-top pddn-20-btm">Ministry Training Tasmania</h1>

    </div>

    <div className="arrow text-center"> <i className="fa fa-angle-down fa-4x"></i> </div>
  </header>
)
