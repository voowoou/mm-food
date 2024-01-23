import React, { FC } from 'react';
import JamSessionBoy from './JamSessionBoy.svg';

const Banner: FC = () => {
    return (
        <div role="banner">
            <div>
                <h1>JAM SESSION</h1>
                <p>
                    Maybe you&aposre on a diet or used to counting the nutrients
                    in dishes? Or you don&apost know what to eat for dinner and
                    want some inspiration?
                    <br />
                    Try to improvise! Fill out the fields with tags and choose
                    the recipe to your taste!
                </p>
                <button>TRY</button>
            </div>
            <JamSessionBoy />
        </div>
    );
};

export default Banner;
