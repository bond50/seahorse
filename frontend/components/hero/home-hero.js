import React from 'react';
import Button from "../ui/button";

const HomeHero = () => {
    return (
        <section className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <h2 data-aos="fade-up">Seahorse Energy Limited </h2>
                            <blockquote data-aos="fade-up" data-aos-delay="100">
                                <p>Providing solutions to Region&#39;s greatest Energy challenges </p>
                            </blockquote>
                             <Button to={"#why-us"} caption={'Get started'} delay='200'/>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HomeHero;