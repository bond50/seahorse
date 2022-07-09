import React from 'react';
import Container2 from "../reusables/r-componens/container-2";
import classes from '../../styles/purpose.module.css'

const Purpose = ({ifSingle}) => {
    return (
        <Container2
            title={'Purpose'}
            alt={'Purpose'}
            single={ifSingle}
            imgPackage={'/img/about/do.jpg'}
            height={720} width={1280}>
            <h3 className={classes.Header}>Promoting Planetary Health</h3>
            <p  className={classes.para}>We remain committed to our traditional mission of creating clean and renewable energy like Solar, Power,
                Wind, Hydro-electric and Biomass fuels.
            <br/>
            <br/>
                Through our commitment in creating a bright future, our purpose of enhancing the use of clean and
                renewable is redefined.
            </p>
        </Container2>
    );
};

export default Purpose;