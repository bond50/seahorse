import React, {Fragment} from 'react';
import Layout from "../../hoc/layout";
import History from "../../components/about/history";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {useRouter} from "next/router";


const Hist = () => {


    const router = useRouter()

    const head = () => (
        <Head>
            <title>History | {APP_NAME}</title>
            <meta
                name="description"
                content={`SeaHorse was founded in April 4th 018. The company has ever since been a part of the development of sustainable energy in the Oil and Gas sector. The company has extended its business network globally.`}
            />
            <meta name="keywords"
                  content="seahorse energy ltd, seahorsenergy.com,history, our history"/>


            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`History | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`SeaHorse was founded in April 4th 018. The company has ever since been a part of the development of sustainable energy in the Oil and Gas sector. The company has extended its business network globally.`}
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
                breadcrumbHeader2={`History`}
                alt={`${APP_NAME} | History`}
                breadImg={`/img/about/about1.jpg`}
            >

                <History/>

            </Layout>
        </Fragment>
    );
};

export default Hist;