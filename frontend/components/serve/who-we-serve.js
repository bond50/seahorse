import React from 'react';
import classes from '../../styles/serve.module.css'
import {Icon} from '@iconify/react';
import {YearsOperated} from "../years-operated/YearsOperated";

const WhoWeServe = ({single}) => {
    const list = [
        {text: "Manufacturing", icon: 'material-symbols:precision-manufacturing', color: '#42a4d2'},
        {text: "Healthcare", icon: 'iconoir:healthcare', color: '#ff5828'},
        {text: "Hospitality", icon: 'emojione:hotel', color: '#11dbcf'},
        {text: "Civil and Construction", icon: 'carbon:construction', color: '#ffa76e'},
        {text: "Educational Sector", icon: 'medical-icon:i-health-education', color: '#47aeff'},
        {text: "Agricultural and Farming", icon: 'carbon:agriculture-analytics', color: '#77e05b'},
        {text: "Government  Agencies", icon: 'fluent:building-government-32-regular', color: '#e361ff'},
        {text: "Parastatals and Corporation", icon: 'simple-icons:yamahamotorcorporation', color: '#e80368'},
        {text: "Commercial sectors", icon: 'maki:commercial', color: '#5578ff'},
        {text: "Industrial sectors", icon: 'carbon:industry', color: '#ffbb2c'},
    ]

    return (
        <section className={`${classes.serve}`}>
            <div className="container" data-aos="fade-up">
                <div className="row justify-content-center">

                    <div className="col-lg-6 ">
                        {!single && <h3 className='text-center'>Who we serve</h3>}
                        <p className={classes.para}>The company has been in business for <YearsOperated/> years now and
                            clients include those in the:</p>
                        <div className="row gy-4 mx-3">
                            {list.map((item, i) => {
                                return <div className="col-md-6" key={i}>
                                    <div className={`${classes.iconList} d-flex`}>
                                        <Icon icon={item.icon} className={classes.icon} style={{color: item.color}}
                                              inline={true}/>
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            })}
                        </div>
                        <p className={classes.para}>With recognition from SWOT analysis, we strongly believe that every
                            client has a distinct
                            institution with varied Strengths, Opportunities, Challenges and Threats in the business
                            environment. Coupled with these understanding, we have realized and scheduled superior
                            levels of responsiveness by initiating proper marketing mix to our customers. </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;