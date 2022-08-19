import React from 'react';
import Layout from "../../hoc/layout";
import Head from "next/head";
import {useRouter} from "next/router";
import {APP_NAME, DOMAIN} from "../../config";
import WhoWeServe from "../../components/serve/who-we-serve";

const Slug = () => {


    const router = useRouter()

    const head = () => (
        <Head>
            <title>Who we serve| {APP_NAME}</title>
            <meta
                name="description"
                content={`${APP_NAME} offer services that fall into commercial ,retail and solar power generation`}
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Who we serve | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`${APP_NAME} offer services that fall into commercial ,retail and solar power generation`}
            />

            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta
                property="og:image"
                content={`/img/service/windmill.jpg`}
            />
            <meta
                property="og:image:secure_url"
                content={`/img/service/windmill.jpg`}
            />
            <meta property="og:image:type" content="image/jpg"/>

        </Head>
    );


    return (

        <>
            {head()}
            <Layout
                breadcrumb
                breadcrumbHeader2={`Who we serve`}
                alt={`${APP_NAME} | Who we serve `}
                breadImg={`/img/service/windmill.jpg`}
            >

                <WhoWeServe single={true}/>
            </Layout>
        </>

    );
};

export default Slug;