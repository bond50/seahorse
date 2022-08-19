import React, {Fragment} from 'react';
import Layout from "../../hoc/layout";
import Purpose from "../../components/about/Purpose";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {useRouter} from "next/router";


const Purpos = () => {


    const router = useRouter()

    const head = () => (
        <Head>
            <title>Our purpose | {APP_NAME}</title>
            <meta
                name="description"
                content={`We remain committed to our traditional mission of creating clean and renewable energy like Solar, Power, Wind, Hydro-electric and Biomass fuels.`}
            />
            <meta name="keywords"
                  content="seahorse energy ltd, seahorsenergy.com,purpose,our purpose"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:title" content={`Our purpose | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content={`We remain committed to our traditional mission of creating clean and renewable energy like Solar, Power, Wind, Hydro-electric and Biomass fuels.`}
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

        </Head>
    );


    return (
        <Fragment>
            {head()}
            <Layout
                breadcrumb
                breadcrumbHeader2={`Our purpose`}
                alt={`${APP_NAME} | Our purpose `}
                breadImg={`/img/about/about1.jpg`}
            >
                <Purpose ifSingle={true}/>
            </Layout>
        </Fragment>
    );
};

export default Purpos;