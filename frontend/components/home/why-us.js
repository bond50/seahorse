import React from 'react';
import Container1 from "../reusables/r-componens/container-1";

const WhyUs = ({noHeader}) => {
    return (
        <Container1
            imgPackage={`/img/about/about1.jpg`}
            height={852}
            width={1280} single={noHeader}
            className='section-bg'
            alt={`About Seahorse Energy LTD`}
            title={`About`}
            id={'why-us'}
            header3={`Why we matter`} header4={` SeaHorse Energy Ltd is a solution provider`}>
            <p>Located in Mombasa, Kenya, SeaHorse Energy Ltd is a relatively young company but its dedicated staff has
                an average of 20 years of direct experience in the Oil and Gas industry world-wide. SeaHorse Energy Ltd.
                is a privately-owned company that serves its consumers in the Oil and Gas industry with leading-edge
                energy engineering analysis, trading and distributing of petroleum product across East and Central
                Africa regions. We are committed to providing excellent customer service to our clients as an efficient
                energy partner.
            </p>
            <p>SeaHorse Energy Ltd is registered privately and incorporated under the Companies Act of 2015 Cap 486 of
                the Kenyan laws. We are a self-reliant energy company licensed to import, export and sale of petroleum
                products. We are licensed by the Energy and Petroleum Regulatory Authority and are committed to provide
                excellent and clean renewable energy solutions.
                In pursuit of business excellence, we incorporate integrity, honesty, commitment and customer
                satisfaction in all areas of our business.
            </p>
        </Container1>
    );
};

export default WhyUs;