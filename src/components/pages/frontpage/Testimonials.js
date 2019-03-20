import React from 'react';
import Aaron from '../../../images/Aaron.png';
import Laura from '../../../images/Laura.png';


export default () => (
  <section id="testimonials">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <div className="row">
              <div className="col-sm-8">
                <h2 className="whiteHeader">Practical instruction and evangelistic opportunities</h2>
                <span><strong>What I loved about my ministry training experience in with the Uni Fellowship of Christians was the opportunities to challenge myself in evangelism. Ialso enjoyed the ministry training both with Mikey, my trainer and with the other ministry trainees from The Vision 100 Network who had weekly training sessions together. I learnt a lot about how to do ministry practically and also grew in my understanding of the Bible and doctrine. My training experience moved me from being open to the idea of ministry, to being convinced that I should go into vocational ministry full time.</strong></span>
                <hr />
                <span><strong>Laura Haines</strong>, International Student Worker at St Helen’s Bishopsgate in London, UK</span>
              </div>
              <div className="col-sm-4">
                <div className="testimonyImg text-center">
                  <img src={Laura} alt="" className="img img-responsive" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 hideWhenXS">
                <div className="testimonyImg text-center">
                  <img src={Aaron} alt="" className="img img-responsive" />
                </div>
              </div>
              <div className="col-sm-8">
                <h2 className="whiteHeader">Seeing growth in my own and others’ spiritual lives</h2>
                <span><strong>I loved my ministry training experience in Tasmania as it helped me to grow as a person and as a Christian leader. I discovered my gifts and passions in an exciting ministry environment and got a taste of full-time ministry that helped me work out whether God wanted to use me in this capacity. It’s so satisfying getting alongside people in ministry and seeing them step up and serve Jesus in new ways. I also got to learn from a great trainer who taught me countless habits and ways of thinking about ministry that will no doubt continue to benefit me in the long term.</strong></span>
                <hr />
                <span><strong>Aaron Johnstone</strong>, City Bible Forum Hobart</span>
              </div>
              <div className="col-xs-12 hideNotXS">
                <div className="testimonyImg text-center">
                  <img src={Aaron} alt="" className="img img-responsive" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
