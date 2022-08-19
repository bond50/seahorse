import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import useToggle from "../../../hooks/useToggle";
import Navbar from "./navbar";


const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 30) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    let navbarClasses = [`header d-flex align-items-center `];
    if (scrolled) {
        navbarClasses.push('fixed-top ')
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const [closed, toggleClosed] = useToggle();


    return (
        <div className={closed ? `mobile-nav-active` : ''}>
            <header id="header" className={navbarClasses.join(' ')} >
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link href="/">
                        <a className="logo d-flex align-items-center">
                            <Image src="/sealogo-1.png" alt="seahorse energy ltd logo" width={480} height={520}/>
                        </a>
                    </Link>
                    <i className={!closed ? `mobile-nav-show bi bi-list` : 'mobile-nav-hide  bi bi-x'}
                       onClick={toggleClosed}/>

                    <Navbar toggleClosed={toggleClosed} scrolled={scrolled}/>
                </div>
            </header>
        </div>
    );
};

export default Header;