import React from 'react';
import logo from '../../../images/logo/MTT-Logo-Light.svg';
import logo2 from '../../../images/logo/MTT-Logo-White-Text.svg';



export default () => (
    <section id="apply-now">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="logo-container"><img src={logo} alt="" className="apply-logo img img-responsive" /></div>
                    <h2 className="text-center"><span className="aqua">Apply now</span> <span className="white"><a href="mailto:info@ministrytrainingtas.org">info@ministrytrainingtas.org</a></span></h2>
                    {/*<h3 className="white text-center">ministrytrainingtasmania.org</h3>*/}
                    <div className="logo-container pddn-20-btm"><img src={logo2} alt="" className="apply-logo img img-responsive" /></div>



                </div>
            </div>
        </div>
    </section>
)
