import React from 'react';
import ServiceCard from "../cards/service card";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import renderHTML from "html-react-parser";
import {API} from "../../config";
import Preloader from "../preloader";

const Services = ({className}) => {
    const {data, error} = useSWR({url: `/services`, method: 'get'}, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <Preloader/>


    return (
        <section id="services" className={className}>
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Products and Services</h2>
                    <p>
                        We offer a comprehensive and unmatched service which entail but, not limited to the following
                        aspects;
                    </p>
                </div>
                <div className="row gy-4">
                    {data && data.map((service, i) => (
                        <ServiceCard
                            title={service.title}
                            delay={`${i * 100}`}
                            href={`/services/${service.slug}`}
                            imgSrc={`${API}/service/photo/${service.slug}`}
                            imgAlt={'commercial'}
                            key={service._id}
                        >
                            {renderHTML(service.excerpt)}
                        </ServiceCard>

                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;