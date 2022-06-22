import React from 'react';
import Link from "next/link";

const Button = ({to, delay, caption}) => {
    return (
        <div className="d-flex" data-aos="fade-up" data-aos-delay={delay}>
            <Link href={to}>
                <a className="custom-btn">{caption}</a>
            </Link>
        </div>
    );
};

export default Button;