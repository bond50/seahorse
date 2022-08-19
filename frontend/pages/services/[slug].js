import React, {useEffect, useState} from 'react';
import Layout from "../../hoc/layout";
import classes from '../../styles/serviceDetail.module.css'
import {listRelated, singlePage} from "../../actions/service";
import Head from "next/head";
import {API, APP_NAME, DOMAIN} from "../../config";
import Image from "next/image";
import Link from "next/link";
import renderHTML from "html-react-parser";
import {useRouter} from "next/router";


const Slug = ({service, query}) => {
    const [related, setRelated] = useState([])
    const router = useRouter()

    const loadRelated = () => {
        listRelated({service}).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setRelated(data)
            }
        })
    };

    useEffect(() => {
        loadRelated()
    }, [service])


    const head = () => (
        <Head>
            <title>
                {service.title} | {APP_NAME}
            </title>
            <meta name="description" content={service.metaDesc}/>
            <link rel="canonical" href={`${DOMAIN}/services/${query.slug}`}/>
            <meta property="og:title" content={`${service.title}| ${APP_NAME}`}/>
            <meta property="og:description" content={service.metaDesc}/>
            <meta property="og:type" content="webiste"/>
            <meta property="og:url" content={`${DOMAIN}/services/${query.slug}`}/>
            <meta property="og:site_name" content={`${APP_NAME}`}/>
            <meta property="og:image" content={`${API}/service/photo/${service.slug}`}/>
            <meta property="og:image:secure_url" content={`${API}/service/photo/${service.slug}`}/>
            <meta property="og:image:type" content="image/jpg"/>
        </Head>
    );

    return (
        <> {head()}
            <Layout
                breadcrumb
                breadcrumbHeader2={service.title}
                alt={service.title}
                breadImg={`/img/service/windmill.jpg`}
            >
                <section className={classes.Detail}>
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row gy-4">

                            <div className="col-lg-4">
                                <div className={classes.ServiceList}>
                                    {related.map(s => {
                                        console.log(`/services/${s.slug}`)
                                        return <Link href={`/services/${s.slug}`} key={s._id}>
                                            <a className={router.asPath === `/services/${s.slug}` ? classes.active : null}>{s.title}</a>
                                        </Link>
                                    })}
                                </div>

                                {/*<h4>{service.title}</h4>*/}
                                {/*{renderHTML(trim(service.excerpt, 240))}*/}
                            </div>

                            <div className={`col-lg-8`}>
                                <Image
                                    src={`${API}/service/photo/${service.slug}`}
                                    width={1280}
                                    height={854}

                                    alt={`service.title ${APP_NAME}`} className={`img-fluid  ${classes.Img}`}/>
                                <h3>{service.title}</h3>

                                {renderHTML(service.body)}
                            </div>

                        </div>

                    </div>
                </section>
            </Layout>
        </>
    );
};
export const getServerSideProps = async ({query}) => {

    return singlePage(query.slug).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            return {
                props: {service: data, query}
            }
        }
    })
}
export default Slug;