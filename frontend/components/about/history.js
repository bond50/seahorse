import React from 'react';
import classes from '../../styles/history.module.css'
import Image from "next/image";

const History = () => {
    return (
        <section>
            <div className="container" data-aos="fade-up">
                <div className="row gy-4" data-aos="fade-up">
                    <div className="col-lg-4">
                        <Image
                            src={`/img/seahorse/istockphoto-1176969551-612x612.jpg`}
                            className="img-fluid"
                            alt={'The history of Seahorse Energy LTD'} width={612} height={369} />
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-lg-5">
                            <h3 className={classes.Header}>
                                The history of Seahorse Energy LTD
                            </h3>
                            <p className={classes.para}>
                                SeaHorse was founded in April 4th 018. The company has ever since been a part of the
                                development of sustainable energy in the Oil and Gas sector. The company has extended
                                its business network globally. Today, SeaHorse is a physical trader and distributor of
                                petroleum products across East and Central Africa region. It is solely committed towards
                                excellent and efficient sustainable energy combination.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default History;