import React from 'react';

import Header from "./Component/Header/Header";
import MainInfo from "./Component/MainInfo/MainInfo";
import Skills from "./Component/Skills/Skills";

import './App.css';
import Projects from "./Component/Projects/Projects";
import Contacts from "./Component/Contacts/Contacts";
import Footer from "./Component/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainInfo />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />

        </div>
    );
}

export default App;
