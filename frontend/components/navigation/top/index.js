import React from 'react';
import classes from '../../../styles/top.module.css'
import {Icon} from '@iconify/react';
import Link from 'next/link'

const Top = () => {
    return (
        <section className={`${classes.top} d-flex align-items-center`}>
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className={`d-flex align-items-center`}>
                    <div className={classes.icon}>
                        <Icon icon="emojione:envelope-with-arrow" className={classes.icon}/>
                        <a href="mailto:info@seahorsenergy.com" className={classes.link}>info@seahorsenergy.com</a>
                    </div>
                    <div className={`${classes.icon} mx-2`}>
                        <Icon icon="charm:phone-incoming" className={classes.icon}/>
                        <a href="tel:+254796777444" className={`${classes.link} `}>+254 796777444 </a>
                    </div>
                    <div className={`${classes.icon} mx-2`}>
                        <Icon icon="charm:phone-incoming" className={classes.icon}/>
                        <a href="tel:+254796777333" className={classes.link}>+254 796777333</a>
                    </div>
                </div>
                <div className={`${classes.socialLinks} d-none d-md-flex align-items-center`}>
                    <Link href={`/blogs`}>
                        <a> <Icon icon="carbon:blog" className={classes.icon}/></a>
                    </Link>
                    <Link href={`/services`}>
                        <a>
                            <Icon icon="ic:baseline-miscellaneous-services"
                                  className={classes.icon}/>
                        </a>
                    </Link>
                    <Link href={`/contact`}>
                        <a>
                            <Icon icon="fluent:contact-card-ribbon-48-filled"
                                  className={classes.icon}/>
                        </a>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Top;