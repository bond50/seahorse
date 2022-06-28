import React from 'react';
import Container2 from "../reusables/r-componens/container-2";


const Values = ({ifSingle}) => {
    return (
        <Container2
            title={'Values'}
            className=''
            single={ifSingle}
            alt={'Values'}
            imgPackage={'/img/seahorse/values.png'}
            height={720} width={1280}>

            <p>
                At SeaHorse Energy Ltd. we are driven and guided by our shared commitment and values. Our main focus is
                on building up value that is centered on providing long-term solutions to energy problems. Elements like
                trust, competency and professionalism; represents our work ethics and how we deliver solutions to our
                esteemed clients.
            </p>
            <p>
                Our shared values such as honesty, integrity, compliance and customer satisfaction are the driving force
                behind our customer satisfaction endeavors. These elements express our commitment to excellent product
                and service delivery. They represent the building blocks of how we work and deliver promptly to our
                clients and stakeholders.
            </p>

        </Container2>
    );
};

export default Values;