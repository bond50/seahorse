import React from 'react';


const NavToggle = ({closed, toggleClosed}) => {
    return (
        <i className={!closed ? `${classes.mobileNavShow} bi bi-list` : `${classes.mobileNavHide}  bi bi-x`}
           onClick={toggleClosed}/>
    );
};

export default NavToggle;