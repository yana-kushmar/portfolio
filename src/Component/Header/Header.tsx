import React from 'react';

import s from "./Header.module.css"
import shared from "../../shared/sharedStyles.module.css"
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <div className={`${s.header} ${shared.container}`}>
            <Navigation />
            </div>
    );
};

export default Header;