import React from 'react';
import Container2 from "../reusables/r-componens/container-2";

const Supply = () => {
    return (
        <Container2
            className='section-bg'
            title={'Distribution And Supply'}
            alt={'Distribution And Supply'}
            imgPackage={'/img/seahorse/car-at-fuel-pump.jpg'}
            height={720} width={1280}>
            <p>At seahorse Energy Ltd , we are committed to working with other customers as efficient
                energy partner.</p>
            <p>The building blocks of our services are based on our understanding customer&#39;s current
                and future energy needs and thereby creating innovative solutions aimed at addressing
                them </p>
            <p>With an efficient Logistics Department coupled with trained technical staff and
                well-maintained
                Owed company trucks, we aim at safe and prompt deliveries of goods at the correct
                quantities
                as ordered by our clients </p>

        </Container2>

    );
};

export default Supply;