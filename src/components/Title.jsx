import React from 'react';
import { Helmet } from 'react-helmet-async';

const Title = ({title}) => {
    return (
        <Helmet>
            <title>{title} | jerin's parlour</title>
        </Helmet>
    );
};

export default Title;