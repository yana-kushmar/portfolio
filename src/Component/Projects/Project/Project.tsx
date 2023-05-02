import React from 'react';

import s from "./Project.module.css"

const Project = (props: any) => {
    return (
        <div className={s.project}>
          <div className={s.image} style={{ backgroundImage: `url("https://hi-news.ru/wp-content/uploads/2020/04/100_stars-750x422.jpg")`}}>
              <button className={s.button}>Watch</button>
          </div>
            <div className={s.infoProject}>
                <h3>Name project</h3>
                <p>Praesent finibus consectetur tortor,uspendisse a quam imperdiet. Nulla at turpis dui. Nullam vitae euismod mi, sed congue odio. </p>
            </div>
        </div>
    );
};

export default Project;