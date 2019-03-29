import React from 'react';
import logo from '../../images/logo/MTTNavLogo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scroll from 'react-scroll';

const TycNav = ({ isFrontPage }) => (
  <Navbar collapseOnSelect fixedTop id="customnav">
    <Navbar.Header>
      <Navbar.Toggle>
      </Navbar.Toggle>
      <Navbar.Brand>
        <a href="/"><img src={logo} className="img-responsive" alt="New York Web Buzz" width="199" height="73" /></a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="about-mtt" spy={true} smooth={true} offset={-50} duration={500}>About</Scroll.Link> :
            <Link to="/#about-mtt">About</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="who-is-mt-for" spy={true} smooth={true} offset={-50} duration={500}>Is this for me?</Scroll.Link> :
            <Link to="/#who-is-mt-for">Is this for me?</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-50} duration={500}>Testimonies</Scroll.Link> :
            <Link to="/#testimonials">Testimonies</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="choose-ministry-focus" spy={true} smooth={true} offset={-50} duration={500}>Choose a Ministry Focus</Scroll.Link> :
            <Link to="/#choose-ministry-focus">Choose a Ministry Focus</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="choose-training-stream" spy={true} smooth={true} offset={-50} duration={500}>Choose a Training Stream</Scroll.Link> :
            <Link to="/#choose-training-stream">Choose a Training Stream</Link>
          }
        </li>
        <li role="presentation">
          {isFrontPage ?
            <Scroll.Link activeClass="active" to="apply-now" spy={true} smooth={true} offset={-50} duration={500}>Apply Now</Scroll.Link> :
            <Link to="/#apply-now">Apply Now</Link>
          }
        </li>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export const FrontPageNavbar = () => (
  <TycNav isFrontPage={true} />
)

export const OtherPageNavbar = () => (
  <TycNav isFrontPage={false} />
)
