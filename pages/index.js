import React from 'react';
import dynamic from 'next/dynamic'
import Head from "next/head";

const DynamicJqueryDiamonds = dynamic(
    () => import('../components/JqueryDiamonds'),
    { loading: () => <p>...</p>, ssr: false }
);

export default function Index() {
    return (
        <div>
            <Head>
                <title>Test</title>
                <link href="/diamonds.css" rel="stylesheet" key="test"/>
            </Head>
            <DynamicJqueryDiamonds/>
        </div>
    );
}
