import React from 'react';
import Link from "next/link";

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
                        <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                            <Link href={`/about`}>
                                <a className="custom-btn">About us </a>
                            </Link>
                            <Link href={`/contact`}>
                                <a className="custom-btn contact mx-2">Send us a message</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;