import React from 'react';

import s from "./Contacts.module.css"
import shared from "../../shared/sharedStyles.module.css"
import Form from "./Form/Form";

const Contacts = () => {
    return (
        <div className={`${s.contactsWrapper} ${shared.container}`}>
            <h2 className={s.title}>Contacts</h2>
            <Form />
            <button className={s.button}>Send</button>
            
        </div>
    );
};

export default Contacts;