import React from 'react';
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import classes from '../../styles/footer.module.css'

const Footer = () => {
    const {data: blogs, error:blogErr} = useSWR({url: `/list-recent-blogs`, method: 'get'}, fetcher);
    const {data: services, error} = useSWR({url: `/services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!services) return <div>loading...</div>
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className={classes.footerInfo}>
                                <h3>Seahorse Energy</h3>
                                <p>
                                    Head,Office ,Sea View Plaza,2nd Floor-Magaret Avenue <br/>
                                    Off Mama Ngina Drive, P.O.Box 89990-80100 Mombasa, Kenya<br/><br/>
                                    <strong>Phone:</strong> +254 796777444/+254 798777333<br/>
                                    <strong>Email:</strong> info@seahorsenergy.com<br/>
                                </p>
                            </div>
                        </div>

                        <div className={`col-lg-2 col-md-6 ${classes.footerLinks}`}>
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"/> <Link href="/"><a> Home</a></Link>
                                </li>
                                <li><i className="bi bi-chevron-right"/> <Link href="/about"><a> About us</a></Link>
                                </li>
                                <li><i className="bi bi-chevron-right"/> <Link href="/services"><a>Products and
                                    services</a></Link></li>
                                <li><i className="bi bi-chevron-right"/> <Link href="/blogs"><a>Blog</a></Link>
                                </li>
                                <li><i className="bi bi-chevron-right"/><Link href="/contact"><a> Contact us</a></Link>
                                </li>
                            </ul>
                        </div>

                        <div className={`col-lg-2 col-md-6 ${classes.footerLinks}`}>
                            <h4>Our Products</h4>
                            <ul>

                                {services.map(service => (
                                    <li key={service._id}><i className="bi bi-chevron-right"/>
                                        <Link href={`/services/${service.slug}`}>
                                            <a>{service.title}</a>
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className={`col-lg-3 col-md-6 ${classes.recent}`}>
                            <h4>Latest articles</h4>
                            <ul>
                                {blogs.map(blog => (
                                    <li key={blog._id}>
                                        <i className="bi bi-dash"/>
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