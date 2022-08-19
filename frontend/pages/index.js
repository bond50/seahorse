import React from 'react';
import Layout from "../hoc/layout";
import WhyUs from "../components/home/why-us";
import Supply from "../components/home/supply";
import Commitment from "../components/home/commitment";
import Services from "../components/home/services";
import MissionVision from "../components/about/mission-vision";
import Cta2 from "../components/home/cta2";
import RecentBlogs from "../components/home/recent-blogs";
import {useRouter} from "next/router";
import {APP_NAME, DOMAIN} from "../config";
import Head from "next/head";
import About from "../components/home/about";


const Index = () => {
    const router = useRouter()
    const head = () => (
        <Head>
            <title>Seahorse Energy Limited</title>
            <meta
                name="description"
                content={`${APP_NAME} is a privately registered and incorporated Company in Kenya under the Companies Act, 2015 Cap 486 of the Laws of Kenya.`}
            />
            <meta name="keywords"
                  content="seahorse energy ltd , seahorsenergy.com,seahorse,seahorse energy"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
            <meta name="robots" content="max-image-preview:large"/>
            <meta property="og:locale" content="en_US"/>

            <meta property="og:title" content={`${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`${APP_NAME} is a privately registered and incorporated Company in Kenya under the Companies Act, 2015 Cap 486 of the Laws of Kenya.`}
            />

            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta name="google-site-verification" content="vUIxc3xTl9zo_bbNfv1CdR1ZZMyiyUP8HtKxtrNogZQ"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );


    return (
        <>
            {head()}
            <Layout hero>
                <WhyUs noHeader/>
                <Cta2/>
                <About/>
                <Services/>
                <Supply/>
                <MissionVision/>
                <Commitment/>
                <RecentBlogs/>

            </Layout>
        </>
    )
        ;
};

export default Index;