import React from 'react';
import Image from "next/image";
import classes from "../../styles/history.module.css";


const Objective = () => {
    return (
        <section className='section-bg'>
            <div className="container" data-aos="fade-up">
                <div className="row gy-4" data-aos="fade-up">
                    <div className="col-lg-4">
                        <Image
                            src={`/img/about/plan.jpg`}
                            className="img-fluid"
                            alt={'The history of Seahorse Energy LTD'} width={612} height={369}/>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-lg-5">
                            <h3 className={classes.Header}>
                               Our  Business Objective
                            </h3>
                            <p className={classes.para}>
                                At SeaHorse Energy Ltd, we strive to be reliable energy partner by providing quality
                                products and services in the energy industry. We are determined to lead in profitability
                                and returns to our clients and stakeholders.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Objective;