import React from 'react';
import {Fragment} from "react";
import Header from "../components/navigation/header/header";
import HomeHero from "../components/hero/home-hero";
import Footer from "../components/footer/footer";
import Breadcrumbs from "../components/reusables/Breadcrumbs";
import ScrollTop from "../components/ScrollTop";

const Layout = ({children, hero, breadcrumb, breadcrumbHeader2, header2Class, breadImg}) => {
    let bg = false
    if (breadcrumb) {
        bg = true
    }

    return (
        <Fragment>
            <Header noBg={bg}/>
            {hero && <HomeHero/>}
            <main id="main">
                {breadcrumb &&
                <Breadcrumbs header2={breadcrumbHeader2} imgPackage={breadImg} header2Class={header2Class}/>}
                {children}
            </main>
            <Footer/>
            <ScrollTop/>
        </Fragment>
    );
};

export default Layout;