import Link from 'next/link';
import parse from 'html-react-parser';
import {API} from '../../config';
import dayjs from 'dayjs';
import classes from '../../styles/SmallCard.module.css'
import Image from "next/image";
import React from "react";

const SmallCard = ({blog, imgWidth, imgHeight}) => {


    const photoLink = `${API}/blog/photo/${blog.slug}`
    const multiLink = `/blogs/${blog.slug}`


    const returnCard = () => {
        const myLoader = () => {
            return photoLink;
        }

        return <div className={`card ${classes.Card}`}>
            <Link href={multiLink}>
                <a>
                    {imgWidth&& <Image
                        loader={myLoader}
                        style={{maxHeight: 'auto', width: '100%'}}
                        className="img-fluid"
                        width={imgWidth}
                        height={imgHeight}
                        src={photoLink}
                        alt={blog.title}
                    />}
                </a>
            </Link>
            <div className="card-body">
                <h3 className="card-title">
                    <Link href={multiLink}>
                        <a>
                            {blog.title.toLowerCase()}
                        </a>
                    </Link>
                </h3>
                <div className="card-text"> {parse(blog.excerpt)}</div>
                {blog && <div className={classes.Info}>
                    Posted on {dayjs(blog.createdAt).format("ddd, MMM D, YYYY h:mm A")}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                        <a className="float-end">{blog.postedBy.username}</a>
                    </Link>
                </div>
                }
            </div>
        </div>;
    };

    return (returnCard());
};

export default SmallCard;