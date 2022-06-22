import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const FinancialInformation = () => {

    const list = [
        {
            eventKey: "1",
            title: "Medical Superintendent",

        },
        {
            eventKey: "2",
            title: "Deputy Medical Superintendent",

        },
        {
            eventKey: "3",
            title: "Nursing officer in charge",

        },
        {
            eventKey: "4",
            title: "Hospital Administrator",

        },
        {
            eventKey: "5",
            title: "Head of clinical services",

        },

    ]


    return (
        <section className='section-bg'>
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Financial information</h2>
                </div>
                <table className="table">
                    <thead>
                    <tr>

                        <th scope="col">Income statement</th>
                        <th scope="col">31 Apr 09
                            Kshs ‘Million
                        </th>
                        <th scope="col">31 Apr 08 Kshs ‘Million</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>

                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>

                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default FinancialInformation;