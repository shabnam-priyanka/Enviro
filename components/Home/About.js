import React from 'react';
import ShowMore from 'react-show-more';

const About = () => {
    // const hello = 44;
    return (
        <div className="about-area d-flex align-items-center">
            <section className="container-xl">
                <div className="row d-flex align-items-center">
                    <div className="col-md">
                        <h2>About Enviro Home Service</h2>
                        <hr className="aboutHr"/>

                        <ShowMore lines={5} more={<h5 className="showMoreBtn">Show more</h5>} less={<h5 className="showLessBtn">Show less</h5>} className="showText">
                            <p id="about-texts">
                                Enviro Home Service is a general contractor company serving the
                                Capital Region and surrounding areas of Ottawa for nearly two
                                decades. We provide general contractor services on construction and
                                renovation projects, providing top quality work for homeowners and
                                businesses. Our job is reputable. We understand the need to balance
                                the budget and construction requirements for renovation projects in
                                Ottawa. Each project is unique, and our general contractors dedicate
                                as much time as necessary to understand our clients' needs and
                                expectations. Your house is the most significant investment you'll
                                ever make, and each renovation or construction project has to bear
                                that in mind. So, if you are considering Enviro Home Service as your general
                                contractors, be sure that our company is customer-driven, detailed
                                oriented and, most of all, always on time and budget. As general
                                contractors in Ottawa, we can help you with virtually any renovation
                                project. Whether you are planning home renovations, kitchen
                                redesigns, finishing basements or transforming income properties, Enviro Home Service provide professional general contracting services. Need help
                                with smaller jobs? Enviro Home Service also do handyman services, like kitchen
                                refacing, flooring installation and much more
                            </p>
                        </ShowMore>
                    </div>
                    <div className="col-md">
                        <img
                            className="img-fluid"
                            src="https://i.imgur.com/30EuEkt.png"
                            alt="about img"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
