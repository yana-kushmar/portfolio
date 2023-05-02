import React from 'react';

import s from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <h2>Yana Puzevich</h2>
            <div className={s.media}>
                <a href="https://google.com">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt=""/>
                </a>
                <a href="https://google.com">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt=""/>
                </a>
                <a href="https://google.com">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt=""/>
                </a>
                <a href="https://google.com">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png" alt=""/>
                </a>

            </div>
            <p>2019 все права защищены</p>
        </div>
    );
};

export default Footer;