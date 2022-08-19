import React, {Fragment} from 'react';
import Layout from "../../hoc/layout";
import MissionStatement from "../../components/about/mission-statement";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {useRouter} from "next/router";


const MissionS = () => {


    const router = useRouter()

    const head = () => (
        <Head>
            <title>Mission statement | {APP_NAME}</title>
            <meta
                name="description"
                content={`At SeaHorse Energy Ltd, our mission is to be the leading sales and service in the organizational and consumer markets`}
            />
            <meta name="keywords"
                  content="seahorse energy ltd,seahorsenergy.com, www.seahorsenergy.com,statement,our mission, mission"/>


            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Mission statement | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`At SeaHorse Energy Ltd, our mission is to be the leading sales and service in the organizational and consumer markets`}
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
                breadcrumbHeader2={`Our Mission`}
                alt={`${APP_NAME} | Mission`}
                breadImg={`/img/about/about1.jpg`}
            >
                <MissionStatement ifSingle={true}/>

            </Layout>
        </Fragment>
    );
};

export default MissionS;