import React from 'react';

import {API} from "../../config";
import renderHTML from "html-react-parser";
import Link from "next/link";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import dayjs from "dayjs";
import Image from "../reusables/lazy/Image";
import classes from '../../styles/RecentBlog.module.css'
import Preloader from "../preloader";


const RecentBlogs = () => {

    const {data: blogs, error} = useSWR({url: `/list-recent-blogs`, method: 'get'}, fetcher);
    if (error) return <div>failed to load recent blogs</div>
    if (!blogs) return <Preloader/>
    return (
        <section>
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Latest articles</h2>
                </div>

                <div className="row gy-5">
                    {blogs && blogs.map((blog, i) => {
                        return <div className="col-xl-3 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay="100" key={i + 1 + 100}>
                            <div className={classes.postBox}>
                                <div className={classes.postImg}>
                                    <Image
                                        width={blog.imgWidth}
                                        height={blog.imgHeight}
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        className="img-fluid"
                                        alt={blog.title}/>
                                </div>
                                <div className={classes.meta}>
                                    <span
                                        className={classes.postDate}>{dayjs(blog.updatedAt).format("ddd, MMM D, YYYY h:mm A")}</span>
                                    {/*<span className={classes.postAuthor}> / {blog.postedBy.name}</span>*/}
                                    <span className={classes.postAuthor}> / Admin </span>
                                </div>
                                <h3 className={classes.postTitle}>{blog.title.toLowerCase()}</h3>
                                {renderHTML(blog.excerpt.length >= 100 ? `${blog.excerpt.substring(0, 100)}...` : blog.excerpt)}
                                <Link href={`/blogs/${blog.slug}`}>
                                    <a className={`${classes.readMore}  stretched-link`}>
                                        <span> More about the article</span>
                                        <i className="bi bi-arrow-right"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    )

};

export default RecentBlogs;

