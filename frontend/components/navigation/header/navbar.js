import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";


const Navbar = ({scrolled, toggleClosed}) => {
    const router = useRouter()
    const list = [
        {to: '/', caption: 'Home'},
        {to: '/about', caption: 'About us'},
        {to: '/services', caption: 'Services'},
        {to: '/team', caption: 'Team'},
        {to: '/blogs', caption: 'Blog'},
        {to: '/media', caption: 'Media center'},
        {to: '/contact', caption: 'Contact us'},

    ]

    return (
        <nav id="navbar" className={`navbar `}>
            <ul className={scrolled ? 'nav-scrolled' : ''}>
                {list.map((item, i) => {
                    return <li key={i} onClick={toggleClosed}>
                        <Link href={`${item.to}`}>
                            <a className={router.pathname === item.to ? "active" : ""}>
                                {item.caption}
                            </a>
                        </Link>
                    </li>;
                })}
            </ul>
        </nav>
    );
};

export default Navbar;