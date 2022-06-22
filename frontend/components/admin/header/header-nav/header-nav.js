import classes from './header-nav.module.css'
import {isAuth, signout} from "../../../../actions/auth";
import {useEffect, useState} from "react";
import Router from "next/router";

const HeaderNav = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
            setMounted(true)
        },

        [])

    return (mounted && <div className={`${classes.HeaderNav}`}>
            {isAuth() && <div className={`${classes.Profile}`}>
                {isAuth() &&  <span className="d-none d-md-block ps-2"
                    onClick={() => signout(() => Router.replace(`/signin`))}>
                    <a>Signout</a>
                  </span>
                }
            </div>}
        </div>
    );
};

export default HeaderNav;