import React from 'react';
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import classes from '../../styles/footer.module.css'
import Preloader from "../preloader";
import {Icon} from '@iconify/react';

const Footer = () => {
    const {data: blogs, error: blogErr} = useSWR({url: `/list-recent-blogs-footer`, method: 'get'}, fetcher);
    const {data: services, error} = useSWR({url: `/services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load footer services</div>
    if (blogErr) return <div>failed to load footer blogs</div>
    if (!services || !blogs) return <Preloader/>

    const useful =[
        {to:'/about/mission', caption:'Our Mission'},
        {to:'/about/vision', caption:'Our Vision'},
        {to:'/about/culture', caption:'Our culture'},
        {to:'/about/purpose', caption:'Our Purpose'},
        {to:'/about/values', caption:'Our Values'},
        {to:'/blogs', caption:'Our Blog'},


    ]
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={classes.footerInfo}>
                                <h3>Seahorse<span> Energy LTD</span></h3>
                                <p>
                                    <strong>Mombasa Branch</strong> <br/>
                                    Sea View Plaza, 2<sup>nd</sup> Floor-Magaret Avenue, <br/>
                                    Off Mama Ngina Drive, <br/> P.O. box 89990-80100 <br/> Mombasa, Kenya.<br/>
                                    <strong>Phone:</strong> +254 796777444/+254 798777333<br/> <br/>

                                    <strong>Nairobi Branch</strong> <br/>
                                    Westlands,woodvale Avenue, Madonna house. <br/> P.O. box 14505-00800 <br/>
                                    <strong>Phone </strong>:+254 798777666 <br/><br/>
                                    <strong>Email:</strong> info@seahorsenergy.com<br/>

                                </p>
                            </div>
                        </div>

                        <div className={`col-lg-2 col-md-6 ${classes.footerLinks}`}>
                            <h4>Useful Links</h4>
                            <ul>
                                {useful.map((item,i)=>{
                                    return <li key={i}>
                                    <Icon icon="ci:sub-right" className={classes.icon}/>
                                    <Link href={item.to}><a> {item.caption}</a></Link>
                                </li>
                                })}
                            </ul>
                        </div>

                        <div className={`col-lg-2 col-md-6 ${classes.footerLinks}`}>
                            <h4>Our Products</h4>
                            <ul>

                                {services && services.map(service => (
                                    <li key={service._id}> <Icon icon="ci:sub-right" className={classes.icon} />
                                        <Link href={`/services/${service.slug}`}>
                                            <a>{service.title}</a>
                                        </Link>
                                    </li>
                                ))}
                                 <li > <Icon icon="ci:sub-right" className={classes.icon} />
                                        <Link href={`/services/who-we-serve`}>
                                            <a>Who we serve</a>
                                        </Link>
                                    </li>

                            </ul>
                        </div>
                        <div className={`col-lg-3 col-md-6 ${classes.recent}`}>
                            <h4>Recent Blog Posts</h4>
                            <ul>
                                {blogs && blogs.map(blog => (
                                    <li key={blog._id}>
                                       <Icon icon="carbon:dot-mark" className={classes.icon} />
                                        <Link href={`/blogs/${blog.slug}`}>
                                            <a>{blog.title}</a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>

                    </div>
                </div>
            </div>

            <div className={`${classes.footerLegal} text-center`}>
                <div
                    className="container">

                    <div className="d-flex flex-column align-items-center">
                        <div className="copyright ">
                            &copy; Copyright <strong><span>Seahorse Energy</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;