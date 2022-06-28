import React from 'react';
import Layout from "../../hoc/layout";
import Contact from "../../components/contact";
import {useRouter} from "next/router";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";

const Index = () => {

    const router = useRouter()

    const head = () => (
        <Head>
            <title>Services| {APP_NAME}</title>
            <meta
                name="description"
                content={`you can reach ${APP_NAME} via email or by dialling below numbers`}
            />

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Contact us | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`you can reach ${APP_NAME} via email or by dialling below numbers`}
            />

            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta
                property="og:image"
                content={`/img/contact/contact1.jpg`}
            />
            <meta
                property="og:image:secure_url"
                content={`/img/contact/contact1.jpg`}
            />
            <meta property="og:image:type" content="image/jpg"/>

        </Head>
    );


    return (
        <>
            {head()}
              <Layout
            breadcrumb
            breadcrumbHeader2={`Contact us`}
            alt={`${APP_NAME } |contact us`}
            breadImg={`/img/contact/contact1.jpg`}
        >
            <Contact/>
        </Layout>
        </>

    );
};

export default Index;