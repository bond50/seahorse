import React from 'react';
import Container1 from "../reusables/r-componens/container-1";

const Culture = ({ifSingle}) => {
    return (
        <Container1
            imgPackage={`/img/about/passion.jpg`}
            height={540}
            width={960}
            alt={`Culture | Seahorse Energy LTD`}
            title={`Our culture `}
            className='section-bg culture '
            single={ifSingle}

        >
            <p>
                At SeaHorse, we are updated with changes and challenges don’t put us down. Instead, we commit our
                resources in finding lasting energy solutions facing the region. We don’t shy away from challenges and
                this further strengthens our capability to solve the hardest energy-related problem. We embrace
                challenges easily, by providing tangible and tailor-made solutions.
            </p>

        </Container1>
    );
};

export default Culture;