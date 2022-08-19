import React, {Fragment} from 'react';
import Layout from "../../hoc/layout";
import Values from "../../components/about/values";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {useRouter} from "next/router";


const Value= () => {


    const router = useRouter()

    const head = () => (
        <Head>
            <title>Values | {APP_NAME}</title>
            <meta
                name="description"
                content={`At SeaHorse Energy Ltd. we are driven and guided by our shared commitment and values. `}
            />
            <meta name="keywords"
                  content="seahorse energy ltd, seahorsenergy.com,values, core-values ,our values, our core values"/>


            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Values | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`At SeaHorse Energy Ltd. we are driven and guided by our shared commitment and values. `}
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
                breadcrumbHeader2={`Our Values`}
                alt={`${APP_NAME} | Values`}
                breadImg={`/img/about/about1.jpg`}
            >
                <Values ifSingle={true}/>
            </Layout>
        </Fragment>
    );
};

export default Value;