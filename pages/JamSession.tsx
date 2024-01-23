import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/banner/Banner';

const JamSession: FC = () => {
    return (
        <div>
            <Head>
                <title>Jam Session</title>
            </Head>
            <Banner />
            <Header />
        </div>
    );
};
