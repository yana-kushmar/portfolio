import React from 'react';

import s from "./Form.module.css"

const Form = () => {
    return (
        <form className={s.form}>
            <input type="text" placeholder="Enter text"/>
            <input type="text" placeholder="Enter text"/>
            <textarea placeholder="Enter text"></textarea>


        </form>
    );
};

export default Form;