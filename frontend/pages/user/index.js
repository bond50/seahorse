import React from 'react';
import Link from "next/link";

const Index = () => {
    return (

        <section className='section-bg user'>
            <div className='container '>
                <p className='alert alert-info'>
                    Uh-oh seems like you are lost.You are not supposed to be here
                </p>
                <Link href={'/'}>
                    Go back to Homepage
                </Link>

            </div>
        </section>

    );
};

export default Index;