import React from 'react';

import {API} from "../../config";
import renderHTML from "html-react-parser";
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import dayjs from "dayjs";
import Image from "../reusables/lazy/Image";
import classes from '../../styles/RecentBlog.module.css'


const RecentBlogs = () => {
    const {data: blogs, error} = useSWR({url: `/list-recent-blogs`, method: 'get'}, fetcher);
    if (error) return <div>failed to load recent blogs</div>
    if (!blogs) return <div id='preloader'/>
    return (
        <section className="section-bg">

            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Latest articles</h2>
                    <p>Visit <Link href='/blogs'>
                        <a>here </a>
                    </Link> for more articles
                    </p>
                </div>

                <div className="row">
                    {blogs.map(blog => {
                        return <div className="col-lg-4" key={blog._id}>
                            <div className={classes.postBox}>
                                <div className={classes.postImage}>
                                    <Image
                                        width={blog.imgWidth}
                                        height={blog.imgHeight}
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        className="img-fluid"
                                        alt={blog.title}/>
                                </div>
                                <span
                                    className={classes.postDate}> {dayjs(blog.updatedAt).format("ddd, MMM D, YYYY h:mm A")}</span>
                                <h3 className={classes.postTitle}>{blog.title.toLowerCase()}</h3>
                                {renderHTML(blog.excerpt.length >= 160 ? `${blog.excerpt.substring(0, 80)}...` : blog.excerpt)}
                                <Link href={`/blogs/${blog.slug}`}>
                                    <a className={`${classes.btn}  mt-auto`}>
                                        <span> More about the article</span><i
                                        className="bi bi-arrow-right"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    })}


                </div>

            </div>

        </section>
    )
        ;
};

export default RecentBlogs;