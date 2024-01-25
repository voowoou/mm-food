import React, { FC } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Banner from '@/components/banner/Banner';
import JamInput from '@/components/JamInput';

const JamSession: FC = () => {
    return (
        <div>
            <Head>
                <title>Jam Session</title>
            </Head>
            <Header />
            <Banner />
            <section>
                <JamInput />
            </section>
        </div>
    );
};

export default JamSession;
