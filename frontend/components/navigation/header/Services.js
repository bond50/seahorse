import React from 'react';
import Dropdown from "./dropdown";
import {services} from "./dropdown-links";
import Link from "next/link";


const Services = ({clicked}) => {

    return (
        <Dropdown text='Our services' to='/services'>
            {services.map(item => {
                return <li key={item._id} onClick={clicked}>
                    <Link href={`/services/${item.slug}`}>
                        <a >{item.title}</a>
                    </Link>
                </li>
            })}
        </Dropdown>
    );
};

export default Services;