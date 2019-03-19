import React from 'react';



export default () => (
    <section id="choose-training-stream">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2 className="aquaHeader">Choose a training stream</h2>
                        <p className="subtitle text-center">Ministry Training Tasmania offers two ways to structure your training time. Commit for as little or as much as you’d like depending on your availability.</p>

                        <div className="row margin-top-50">
                            <div className="col-md-3">
                                <div className="col-xs-2">
                                    <span className="trainingOptionNum">1</span>
                                </div>
                                <div className="col-xs-10">
                                    <div className="trainingOptionTitle">Paid apprenticeship</div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <p className="ministryInfo">Paid apprenticeships use the MTS framework. Successful candidates are coached in the process of raising their own prayer and financial support base, as part of their training experience. This includes weekly 1:1 mentoring with an experience ministry leader, 6 monthly training and development reviews and the annual AFES Apprentices Conference in Sydney.</p>
                            </div>
                        </div>
                        <hr />



                        <div className="row">
                            <div className="col-md-3">
                                <div className="col-xs-2">
                                    <span className="trainingOptionNum">2</span>
                                </div>
                                <div className="col-xs-10">
                                    <div className="trainingOptionTitle">Volunteer internship</div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <p className="ministryInfo">Volunteer internships range from 8–20 hours per week. This includes monthly 1:1 mentoring with an experienced ministry leader, working with a personal development plan and free tickets to local ministry training events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
