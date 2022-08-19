import {listRelated, singleBlog} from "../../actions/blog";
import {API, APP_NAME, DOMAIN} from "../../config";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import SmallCard from "../../components/cards/small-card";
import Layout from "../../hoc/layout";
import Card from "../../components/cards/Card";
import BlogSideBarContent from "../../components/sidebar/sidebar-content";


const SingleBlog = ({blog, query}) => {
    const [related, setRelated] = useState([])
    useEffect(() => {
        const abortCtrl = new AbortController();
        const opts = {
            signal: abortCtrl.signal,
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({blog})
        };
        listRelated(opts).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setRelated(data)
            }
        })
        return () => abortCtrl.abort();
    }, [blog])


    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc}/>
            <meta name="keywords"
                  content={`Seahorse energy LTD , seahorse, seahorsenergy.com ,Renewable energy, green energy, clean energy,Eco-friendly,${blog.title}`}/>
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`}/>
            <meta property="og:description" content={blog.mdesc}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`}/>
            <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`}/>
            <meta property="og:image:type" content={`image/${blog.imgType}`}/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    const showBlog = () => {
        return <Card blog={blog}/>
    };


    const showRelatedBlog = () => {
        return related.map(blog => (
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="600" key={blog._id}>
                <article>
                    <SmallCard
                        blog={blog}
                        imgWidth={blog.imgWidth}
                        imgHeight={blog.imgHeight}/>
                </article>
            </div>
        ));
    };

    return (
        <>
            {head()}
            <Layout
                breadcrumb
                alt={blog.title}
                breadcrumbHeader2='Blog Details'
                breadImg={`https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`}
            >
                <section>
                    <div className="container" data-aos="fade-up">
                        <div className="row g-5 ">
                            <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                                {showBlog()}
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
                                <BlogSideBarContent/>
                            </div>
                        </div>

                    </div>
                </section>
                <section className='section-bg'>
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Related articles</h2>
                        </div>
                        <div className="row">
                            {showRelatedBlog()}
                        </div>

                    </div>
                </section>
            </Layout>

        </>
    );
};


export const getServerSideProps = async ({query}) => {

    return singleBlog(query.slug).then(data => {
        if (data.error) {
            return <p>haha</p>

        } else {
            return {
                props: {blog: data, query}
            }
        }
    })
}


export default SingleBlog;