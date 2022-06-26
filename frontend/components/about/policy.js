import React from 'react';
import Image from "next/image";
import classes from '../../styles/cta.module.css'

const Cta = () => {
    return (
        <section className={classes.wrapper}>
            <Image
                src={'/img/about/energy.jpg'}
                layout='fill'
                objectFit={'cover'}
                alt={'Cta| seahorse energy LTD'}
                objectPosition='center'
            />
            <div className={classes.container}>

                <div className="container" data-aos="fade-up">

                    <div className="row justify-content-center">
                        <h3 className='text-center'>Environmental Policy Strategy</h3>
                        <div className="col-lg-8 text-lg-start text-sm-center">

                            <p>Over the years, SeaHorse has contributed effectively to the community and since 2018; it
                                has systematically participated in environmental protection by advocating the use of
                                renewable energy such as Solar power, Wind power, Hydroelectric power and Biomass fuels.
                                With this in mind, SeaHorse aims at providing tangible, prompt and specific tailor- made
                                solutions. The company has been awarded the “Mombasa Environmental Prize and received
                                recognition certificates for our ability to create innovative energy solutions. . </p>
                            <p>
                                SeaHorse Energy Limited is striving to pursue Global and Regional initiatives towards
                                the use of renewable energy. Among these features is the use of Hydro-electric power,
                                Wind power, Solar power and Bio mass fuels. According to environmental specialists, the
                                above highlights represent a new era of environmental standard.
                                In addition to that, SeaHorse strives to create favorable facilities and environment for
                                its employees to ensure their safety and well-being.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;