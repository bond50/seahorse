import React from 'react';
import {Icon} from '@iconify/react';
import classes from '../styles/scrollBottom.module.css'

const ScrollDown = ({clicked}) => {


    return (
        <div className='container'>
            <div className={classes.scrollBtm} onClick={clicked}>
                <Icon icon="bi:arrow-down" className={classes.icon} />
            </div>
        </div>
    );
};

export default ScrollDown;