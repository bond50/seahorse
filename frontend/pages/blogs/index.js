import React, {useState} from 'react';
import Layout from "../../hoc/layout";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {withRouter} from "next/router";
import {listBlogsWithCategoriesAndTags} from "../../actions/blog";
import SmallCard from "../../components/cards/small-card";

const Blogs = ({blogs, totalBlogs, blogsLimit, router}) => {
    const head = () => (
        <Head>
            <title>Blog</title>
            <meta
                name="description"
                content="Seahorse energy LTD latest articles on Demystifying Myths and Misconceptions Surrounding Renewable Energy ,Top 6 Renewable Energy Trends in 2022,If Renewable Energy Taking Over As The Best Energy Solution,  "/>
            <meta
                name="keywords"
                content="Seahorse energy LTD , seahorse, seahorsenergy.com ,Renewable energy, green energy, clean energy,Eco-friendly"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:title" content={`Blog  | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content="Seahorse energy LTD latest articles on Demystifying Myths and Misconceptions Surrounding Renewable Energy ,Top 6 Renewable Energy Trends in 2022,If Renewable Energy Taking Over As The Best Energy Solution,  "/>


            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta
                property="og:image"
                content={`https://images.pexels.com/photos/6416345/pexels-photo-6416345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            />
            <meta
                property="og:image:secure_url"
                content={`https://images.pexels.com/photos/6416345/pexels-photo-6416345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            />
            <meta property="og:image:type" content="image/jpeg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    const [limit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button
                    onClick={loadMore}
                    className="btn btn-outline-secondary  btn-sm"
                >
                    Load more
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className='col-lg-4'>
                    <SmallCard
                        blog={blog}
                        imgWidth={blog.imgWidth}
                        imgHeight={blog.imgHeight}/>
                </div>
            );
        });
    };

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <div key={i} className='col-lg-4'>
                <SmallCard
                    blog={blog}
                    imgWidth={blog.imgWidth}
                           imgHeight={blog.imgHeight}/>
            </div>
        ));
    };


    return (
        <>
            {head()}
            <Layout
                breadcrumb
                alt={`Our blog`}
                breadcrumbHeader2={`Our blog`}
                breadImg={`/img/blog/blog1.jpg`}
            >

                <section className='blog-section'>
                    <div className="container ">
                        <div className='row'>
                            {showAllBlogs()}
                            {showLoadedBlogs()}
                        </div>
                        <div className="text-center pb-3">{loadMoreButton()}</div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export const getServerSideProps = async () => {
    let skip = 0;
    let limit = 6;
    return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
        console.log('DATA',data)
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                props: {
                    blogs: data.blogs,
                    categories: data.categories,
                    totalBlogs: data.size,
                    blogsLimit: limit,
                    blogSkip: skip,
                },
            };
        }
    });
};

export default withRouter(Blogs);