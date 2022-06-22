import React from 'react';
import Layout from "../../hoc/layout";
import Team from "../../components/team";

const Index = () => {
    return (
        <Layout
            breadcrumb
            breadcrumbHeader2={`Our hardworking team`}
            breadImg={`https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?cs=srgb&dl=pexels-fauxels-3184418.jpg&fm=jpg`}
        >
            <Team/>
        </Layout>
    );
};

export default Index;