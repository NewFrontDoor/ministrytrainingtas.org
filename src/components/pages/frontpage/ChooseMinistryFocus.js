import React from 'react';
import ufcLogo from '../../../images/logo/ufc-logo.svg';
import subbiesLogo from '../../../images/logo/subbies-logo.svg';
import focusLogo from '../../../images/logo/focus-logo.png';



export default () => (
  <section id="choose-ministry-focus">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="aquaHeader">Identify your ministry focus</h2>
            <h3 className="darkBlueHeader">Work with either local Australian students as part of the University Fellowship of Christians or international students alongside FOCUS or Subbies.</h3>

            <div className="row margin-top-50">
              <div className="col-sm-3">
                <div className="ministryLogoContainer"><img src={ufcLogo} alt="" className="img img-responsive" /></div>
              </div>
              <div className="col-sm-9"><p className="ministryInfo">The University Fellowship of Christians equips Christian students so they can grow to maturity in life and faith, while sharing the gospel on campus and using their gifts for the kingdom.</p><br />
                <a href="https://ufcutas.org" rel="noreferrer noopener" target="_blank"><span className="ministryLink">ufcutas.org</span></a>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <div className="ministryLogoContainer"><img src={focusLogo} alt="" className="img img-responsive" /></div>
              </div>
              <div className="col-sm-9">
                <p className="ministryInfo">The Fellowship of Overseas Christian University Students provides international students with food, fun, friendship and an introduction to the Jesus and the Christian life.</p><br />
                <a href="https://focustas.org" rel="noreferrer noopener" target="_blank"><span className="ministryLink">focustas.org</span></a>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-3">
                <div className="ministryLogoContainer"><img src={subbiesLogo} alt="" className="img img-responsive" /></div>
              </div>
              <div className="col-sm-9">
                <p className="ministryInfo">Subbies welcomes all students from India, Nepal, Pakistan, Sri Lanka and Bangladesh. Weekly meetings are all about food, building community and the Bible’s good news about God.</p><br />
                <a href="http://subbies.org.au" rel="noreferrer noopener" target="_blank"><span className="ministryLink">subbies.org.au</span></a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
)
