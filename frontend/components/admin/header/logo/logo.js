import classes from './logo.module.css'
import Link from 'next/link'

import Image from "next/image";
import {isAuth} from "../../../../actions/auth";
import React from "react";

const Logo = ({clicked}) => {
    return (
        <div className={classes.Logo}>
            <Link href={`/admin`}>
                <a className={classes.Link}>
                    <Image src="/sealogo-1.png" alt="seahorse energy ltd logo" width={480} height={520}/>
                    {isAuth() &&
                    <span className="d-none d-lg-block mx-1">
                        {`Welcome ${isAuth().name}`}
                    </span>}
                </a>
            </Link>
            <i className={`bi bi-list ${classes.Icon}`} onClick={clicked}/>
        </div>
    );
};

export default Logo;