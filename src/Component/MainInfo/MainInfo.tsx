import React from 'react';

import s from "./MainInfo.module.css"
import shared from "../../shared/sharedStyles.module.css";

const MainInfo = () => {
    return (
        <div className={`${s.main} ${shared.container}`}>
            <div className={s.greeting}>
                <span>Hi there</span>
                <h1>My name is Yana</h1>
                <p>I'm frontend developer</p>
            </div>
            <div className={s.photo}></div>

        </div>
    );
};

export default MainInfo;