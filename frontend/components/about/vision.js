import React from 'react';
import Container1 from "../reusables/r-componens/container-1";

const Vision = () => {
    return (
        <Container1
            imgPackage={`https://images.pexels.com/photos/221538/pexels-photo-221538.jpeg?cs=srgb&dl=pexels-pixabay-221538.jpg&fm=jpg`}
            height={540}
            width={960}
            alt={`Vision statement | Seahorse Energy LTD`}
            title={`Vision `}
            className='section-bg mission-vision '
        >
            <p>
                The core vision at SeaHorse Energy Ltd is to become the leading energy partner that provides consumers
                with efficient energy solutions to the most difficult energy problems in the region. Through outstanding
                customer-based building blocks, our company is keen in providing current and future innovative energy
                solutions to our client’s needs.
            </p>
            <p>Thus, SeaHorse Energy Ltd is geared to be stakeholders in the provision and sustainable supply of quality
                product that exceeds the customer expectations.
            </p>
        </Container1>
    );
};

export default Vision;