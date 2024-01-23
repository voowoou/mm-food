import React, { FC } from 'react';
import Logo from './Logo';

const Header: FC = () => {
    return (
        <header>
            <nav>
                <button>À LA CARTE</button>
                <button>JAM SESSION</button>
            </nav>
            <Logo />
            <nav>
                <button>À LA ALBUM</button>
                <button>ABOUT APP</button>
            </nav>
        </header>
    );
};

export default Header;
