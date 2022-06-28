import {singleCategory} from "../../actions/category";
import Head from "next/head";
import {APP_NAME, DOMAIN,} from "../../config";
import React from "react";
import SmallCard from "../../components/cards/small-card";
import Layout from "../../hoc/layout";


const Category = ({category, blogs, query}) => {
    const head = () => (
        <Head>
            <title>
                {category.name} | {APP_NAME}
            </title>
            <meta name="description" content={`${APP_NAME} blogs on ${category.name}`}/>
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`}/>
            <meta property="og:title" content={`${category.title}| ${APP_NAME}`}/>
            <meta property="og:description" content={`${APP_NAME} blog on ${category.name}`}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image"
                  content={`/late.jpg`}/>
            <meta property="og:image:secure_url"
                  content={`/late.jpg`}/>
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>

    );

    const showCats = () => {
        return blogs.map((blog, i) => (
            <div className="col-md-4" key={i}>
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
                alt={category.name}
                breadcrumbHeader2={category.name}
                breadImg={`https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80`}
            >
                <section className='blog-section'>
                    <div className="container mt-2">
                        <div className="row">{showCats()}</div>
                    </div>
                </section>
            </Layout>
        </>
    );
};
export const getServerSideProps = async ({query}) => {

    return singleCategory(query.slug, 'category').then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                props: {
                    category: data.category,
                    blogs: data.blogs,
                    query
                }
            }
        }
    })
}

export default Category;