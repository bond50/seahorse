import React, {Fragment} from 'react';
import Layout from "../../hoc/layout";
import Vision from "../../components/about/vision";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {useRouter} from "next/router";


const VisionStatement = () => {


    const router = useRouter()

    const head = () => (
        <Head>
            <title>Vision statement | {APP_NAME}</title>
            <meta
                name="description"
                content={`The core vision at SeaHorse Energy Ltd is to become the leading energy partner that provides consumers with efficient energy solutions to the most difficult energy problems in the region`}
            />
            <meta name="keywords"
                  content="seahorse energy ltd,seahorsenergy.com, www.seahorsenergy.com,statement,our vision, vision"/>


            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Vision statement | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`The core vision at SeaHorse Energy Ltd is to become the leading energy partner that provides consumers with efficient energy solutions to the most difficult energy problems in the region`}
            />

            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta
                property="og:image"
                content={`/img/about/about1.jpg`}
            />
            <meta
                property="og:image:secure_url"
                content={`/img/about/about1.jpg`}
            />
            <meta property="og:image:type" content="image/jpg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );


    return (
        <Fragment>
            {head()}
            <Layout
                breadcrumb
                breadcrumbHeader2={`Our Vision`}
                alt={`${APP_NAME} | Vision`}
                breadImg={`/img/about/about1.jpg`}
            >
                <Vision ifSingle={true}/>
            </Layout>
        </Fragment>
    );
};

export default VisionStatement;