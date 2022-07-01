import React from 'react';
import Container1 from "../reusables/r-componens/container-1";

const MissionStatement = ({ifSingle}) => {
    return (
        <Container1
            imgPackage={`/img/about/mission.jpg`}
            height={540}
            width={960}
            single={ifSingle}
            alt={`Mission statement | Seahorse Energy LTD`}
            title={`Mission statement `}
            className='section-bg mission-vision '

        >
            <p>
                At SeaHorse Energy Ltd, our mission is to be the leading sales and service in the organizational and
                consumer markets. The company’s main focus is to provide customers with quality products at competitive
                rates and a flexible sales and service staff. SeaHorse specializes in the sale and service of Oil and
                Gas products such as Fuel oil, Automotive Gas Oil (Diesel), Industrial Diesel Oil (IDO), Illuminated
                Kerosene (Kerosene) and a wide range of Lubricants
            </p>
            <p>Also, the company has 6 employees and is committed to promoting the use of renewable energy. Our main
                goal is to build a strong clientele-base by providing exceptional customer service and care as we pursue
                business innovation and advanced technology.
            </p>
        </Container1>
    );
};

export default MissionStatement;