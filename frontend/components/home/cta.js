import React from 'react';

const Cta = () => {
    return (
         <section id="call-to-action" className="call-to-action">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h3>Our Products</h3>
                            <p>Seahorse Energy Limited Offer the following quality products to our beloved clients</p>
                            <ul className='text-center'>

                                <li><i className="bi bi bi-check-circle-fill mx-2"/>Fuel oil</li>
                                <li><i className="bi bi bi-check-circle-fill mx-2"/>Industrial Diesel Oil - IDO</li>
                                <li><i className="bi bi bi-check-circle-fill mx-2"/>Automotive Gas Oil - Diesel</li>
                                <li><i className="bi bi bi-check-circle-fill mx-2"/>Illuminated Kerosene (Kerosine)
                                </li>
                                <li><i className="bi bi bi-check-circle-fill mx-2"/>Lubricants</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Cta;