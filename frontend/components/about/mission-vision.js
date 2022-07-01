import React from 'react';
import ValueCard from "../cards/value-card";

const MissionVision = ({ifSingle}) => {
    const list = [
        {
            title: 'Mission',
            delay: '100',
            src: '/img/about/mission.jpg',
            para: 'To build a strong clientele-base by providing exceptional customer service and care as we pursue business through innovation and advanced technology'
        },
        {
            title: 'Vision',
            delay: '200',
            src: '/img/about/vision.jpg',
            para: 'To be stakeholders in provision and sustainable supply of quality products that exceeds customer expectations.'
        },



    ]
    return (
        <section id="values" className="values">
            <div className="container" data-aos="fade-up">

                {!ifSingle &&<div className="section-header">
                    <h2>Our Mission and Vision</h2>
                </div>}

                <div className="row">
                    {list.map((item, i) => (
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={item.delay} key={i}>
                            <ValueCard
                                src={item.src}
                                title={item.title}
                                paragraph={item.para}
                                title2={item.title2}/>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MissionVision;