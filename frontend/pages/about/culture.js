import React, {Fragment} from 'react';
import Layout from "../../hoc/layout";
import Culture from "../../components/about/culture";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {useRouter} from "next/router";


const Cultu = () => {


    const router = useRouter()

    const head = () => (
        <Head>
            <title>Our culture | {APP_NAME}</title>
            <meta
                name="description"
                content={`At SeaHorse, we are updated with changes and challenges don’t put us down. Instead, we commit our resources in finding lasting energy solutions facing the region.`}
            />
            <meta name="keywords"
                  content="seahorse energy ltd, seahorsenergy.com,culture, our culture"/>


            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Our culture | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`At SeaHorse, we are updated with changes and challenges don’t put us down. Instead, we commit our resources in finding lasting energy solutions facing the region. `}
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
                breadcrumbHeader2={`Our culture`}
                alt={`${APP_NAME} | Our culture`}
                breadImg={`/img/about/about1.jpg`}
            >

                <Culture ifSingle={true}/>

            </Layout>
        </Fragment>
    );
};

export default Cultu;