import React from 'react';

import Logotype from '../logotype';
import Menu from '../menu';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <Logotype />
                <Menu />
            </div>
        </div>
    )
}

export default Header;