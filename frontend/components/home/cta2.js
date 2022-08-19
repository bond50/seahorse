import React from 'react';
import Link from "next/link";
import classes from '../../styles/cta1.module.css'

const Cta2 = () => {
    return (
        <section className={classes.cta}>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-8  ">
                        <h3>Brief History </h3>
                        <p><span>Founded:</span>2018</p>
                        <p><span>Type:</span>Privately owned</p>
                        <p><span>Industries:</span> Oil and Gas</p>
                        <p><span>Company size:</span>1-10 employees</p>
                        <p><span>In Country Location:</span> Located at Sea View Plaza – 2nd floor, Margaret Avenue off
                            Mama
                            Ngina Drive</p>
                        <p><span>Specialties:</span>Engineering, Manufacturing and Procurement of clean reusable energy
                        </p>
                    </div>
                    <div className={`col-lg-4 ${classes.ctaBtnContainer} text-center`}>
                        <Link href={`/contact`}>
                            <a className={classes.ctaBtn}>Request a quote</a>
                        </Link>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Cta2;