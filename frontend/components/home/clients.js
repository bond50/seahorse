import React from 'react';

const Clients = () => {
    return (
        <section id="clients1" className="clients  section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h3>Who we serve</h3>
                </div>

                <div className="row content">
                    <div className="col-lg-6">
                        <p>
                            Seahorse Energy Ltd Serves the following group of clients:
                        </p>
                        <ul>
                            <li><i className="bi bi-check-circle-fill"/>Commercial and industrial</li>
                            <li><i className="bi bi-check-circle-fill"/>Exports and transit</li>
                            <li><i className="bi bi-check-circle-fill"/>Manufacturing</li>
                            <li><i className="bi bi-check-circle-fill"/>Healthcare</li>
                            <li><i className="bi bi-check-circle-fill"/>Hospitality</li>
                            <li><i className="bi bi-check-circle-fill"/>Civil Engineering and construction</li>
                            <li><i className="bi bi-check-circle-fill"/>Government Agencies, Parastatals and
                                Corporations
                            </li>
                            <li><i className="bi bi-check-circle-fill"/>Agricultural and Farming</li>
                            <li><i className="bi bi-check-circle-fill"/>Educational Sector</li>

                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            With a distinct SWOT Analysis,we strongly believe that each has a unique organization
                            with different Strengths,Challenges Opportunities and Threats in business
                            environment.With these understanding, we have recognized and put in place superior
                            levels of responsiveness by applying proper marketing mix to our clients
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Clients;