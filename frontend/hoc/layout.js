import React from 'react';
import {Fragment, useRef} from "react";
import Header from "../components/navigation/header/header";
import HomeHero from "../components/hero/home-hero";
import Footer from "../components/footer/footer";
import Breadcrumbs from "../components/reusables/Breadcrumbs";
import ScrollTop from "../components/ScrollTop";
import Top from "../components/navigation/top";
import ScrollDown from "../components/scroll-down";

const Layout = ({children, hero, breadcrumb, breadcrumbHeader2, header2Class, alt, breadImg}) => {
    let bg = false
    if (breadcrumb) {
        bg = true
    }
    const section = useRef(null)

    const goToSection = () => {
         const where =  section.current.offsetTop - 40
        window.scrollTo({top: where, behavior: "smooth"})
    }
    return (
        <Fragment>
            <Top/>
            <Header noBg={bg}/>
            {hero && <HomeHero/>}
            <main id="main">
                {breadcrumb &&
                <Breadcrumbs 
                header2={breadcrumbHeader2} 
                imgPackage={breadImg} 
                header2Class={header2Class} 
                alt={alt}/>}
                <ScrollDown clicked={goToSection}/>
                <div ref={section} />
                {children}
            </main>
            <Footer/>
            <ScrollTop/>
        </Fragment>
    );
};

export default Layout;