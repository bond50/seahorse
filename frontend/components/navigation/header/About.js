import React from 'react';
import Dropdown from "./dropdown";
import {aboutList} from "./dropdown-links";
import Link from "next/link";

const About = ({clicked}) => {
    return (
        <Dropdown text='About us' to='/about'>
            {aboutList.map((item,i) => {
                return <li key={i} onClick={clicked}>
                    <Link href={`/about/${item.slug}`}>
                        <a>{item.title}</a>
                    </Link>
                </li>
            })}
        </Dropdown>
    );
};

export default About;