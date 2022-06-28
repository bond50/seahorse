import React from 'react';
import Layout from "../../hoc/layout";
import Team from "../../components/team";
import Head from "next/head";
import {APP_NAME, DOMAIN} from "../../config";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()
    const head = () => (
        <Head>
            <title>Our team | {APP_NAME}</title>
            <meta
                name="description"
                content="Seahorse energy LTD latest articles on Demystifying Myths and Misconceptions Surrounding Renewable Energy ,Top 6 Renewable Energy Trends in 2022,If Renewable Energy Taking Over As The Best Energy Solution,  "/>
            <meta
                name="keywords"
                content="Seahorse energy LTD , seahorse, seahorsenergy.com our team, team members, team, hardworking team, members"/>

            <link rel="canonical" href={`${DOMAIN}${router.pathname}`}/>

            <meta property="og:title" content={`Our team  | ${APP_NAME}`}/>
            <meta
                property="og:description"
                content="Seahorse energy LTD latest articles on Demystifying Myths and Misconceptions Surrounding Renewable Energy ,Top 6 Renewable Energy Trends in 2022,If Renewable Energy Taking Over As The Best Energy Solution,  "/>


            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>

            <meta
                property="og:image"
                content={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg`}
            />
            <meta
                property="og:image:secure_url"
                content={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg`}
            />
            <meta property="og:image:type" content="image/jpeg"/>
            {/*<meta property="fb:app_id" content={`${FB_APP_ID}`}/>*/}
        </Head>
    );

    return (
        <>
            {head()}
            <Layout
                breadcrumb
                alt={`Our hardworking team`}
                breadcrumbHeader2={`Our hardworking team`}
                breadImg={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg`}
            >
                <Team/>
            </Layout></>
    );
};

export default Index;