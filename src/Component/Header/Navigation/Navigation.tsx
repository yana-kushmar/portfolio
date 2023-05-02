import React from 'react';

import s from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={s.navigation}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </nav>
    );
};

export default Navigation;