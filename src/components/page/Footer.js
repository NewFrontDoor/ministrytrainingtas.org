/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';

const Footer = ({ isFrontPage }) => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-9 col-lg-9">
          <ul className="list-inline">
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="about-mtt" spy={true} smooth={true} offset={-50} duration={500}>About</Scroll.Link> :
                <Link to="/#about-mtt">About</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="who-is-mt-for" spy={true} smooth={true} offset={-50} duration={500}>Is this for me?</Scroll.Link> :
                <Link to="/#who-is-mt-for">Is this for me?</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="testimonials" spy={true} smooth={true} offset={-50} duration={500}>Testimonies</Scroll.Link> :
                <Link to="/#testimonials">Testimonies</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="choose-ministry-focus" spy={true} smooth={true} offset={-50} duration={500}>Choose a Ministry Focus</Scroll.Link> :
                <Link to="/#choose-ministry-focus">Choose a Ministry Focus</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="choose-training-stream" spy={true} smooth={true} offset={-50} duration={500}>Choose a Training Stream </Scroll.Link> :
                <Link to="/#choose-training-stream">Choose a Training Stream</Link>
              }
            </li>
            <li>
              {isFrontPage ?
                <Scroll.Link className="customLinkColor" activeClass="active" to="apply-now" spy={true} smooth={true} offset={-50} duration={500}>Apply Now</Scroll.Link> :
                <Link to="/#apply-now">Apply Now</Link>
              }
            </li>
          </ul>
          <p className="copyright">Copyright <i className="fa fa-copyright"></i> 2019 - Ministry Training Tasmania</p>
          <p className="copyright">Website by <a href="https://newfrontdoor.org/" target="_blank" rel="noreferrer noopener">New Front Door</a></p>
        </div>
        <div className="col-sm-4 col-md-3 col-lg-3">
          <ul className="list-inline social-buttons">
            <li> <a className="fa fa-facebook fa-lg" href="https://www.facebook.com/NewFrontDoorIT/" target="_blank" rel="noreferrer noopener"></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export const FrontPageFooter = () => (
  <Footer isFrontPage={true} />
)

export const OtherPageFooter = () => (
  <Footer isFrontPage={false} />
)
/* eslint-enable jsx-a11y/anchor-has-content */
