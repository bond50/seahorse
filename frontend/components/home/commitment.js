import React from 'react';
import {Icon} from '@iconify/react';

const Commitment = () => {
    return (
        <section  className="alt-services section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Our commitment to renewable clean energy</h2>
                </div>

                <div className="row justify-content-around gy-4">
                    <div className="col-lg-6 img-bg" style={{
                        backgroundImage:
                            'url(' +
                            '/img/home/white-male.jpg' +
                            ')'
                    }}
                         data-aos="zoom-in" data-aos-delay="100"/>

                    <div className="col-lg-5 d-flex flex-column justify-content-center">

                        <p>Seahorse Energy Ltd is committed to promoting Global and Regional initiatives towards the
                            use of Renewable which includes the use of </p>

                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                           <Icon icon="openmoji:solar-energy"  className='flex-shrink-0 icon'/>
                            <div>
                                <h3><span className="stretched-link">Solar power</span></h3>
                                <p>Create and generate solar electricity to emerging markets. Schools, Businesses
                                    and communities all around the world can benefit from Solar energy</p>
                            </div>
                        </div>


                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                             <Icon icon="material-symbols:wind-power-sharp"  className='flex-shrink-0 icon'/>

                            <div>
                                <h3><span className="stretched-link">Wind power</span></h3>
                                <p>The process by which the wind is used to generate mechanical power or
                                    electricity.
                                    Wind turbines convert the kinetic energy in the wind into mechanical power.</p>
                            </div>
                        </div>


                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                            <Icon icon="mdi:hydro-power"  className='flex-shrink-0 icon'/>

                            <div>
                                <h3><span  className="stretched-link">Hydro-Electric power</span></h3>
                                <p> Form of energy that harnesses the power of water in motion—such as water flowing
                                    over a waterfall—to generate electricity</p>
                            </div>
                        </div>


                        <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                            <Icon icon="arcticons:fuelflash"  className='flex-shrink-0 icon'/>
                            <div>
                                <h3><span className="stretched-link">Biomass fuels</span></h3>
                                <p>Biomass fuels are organic materials produced in a renewable manner</p>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </section>
    );
};

export default Commitment;