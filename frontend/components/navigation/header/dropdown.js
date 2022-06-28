import React from 'react';
import {Icon} from '@iconify/react';
import useToggle from "../../../hooks/useToggle";
import Link from "next/link";

const Dropdown = ({children, text, to}) => {
    const [open, toggleClosed] = useToggle();
    return (
        <li className="dropdown" onClick={toggleClosed}>
            <Link href={to}>
                <a><span>{text}</span>
                    <Icon icon="akar-icons:chevron-down" className="dropdown-indicator"/>
                </a>
            </Link>

            <ul className={`${open ? 'dropdown-active' : 'close'}`}>
                {children}
            </ul>
        </li>
    );
};

export default Dropdown;