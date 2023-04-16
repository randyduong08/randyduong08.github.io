import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './HomePage/IndexApp';
import Projects from './ProjectPage/ProjectApp';
import Contacts from './ContactPage/ContactApp';

const Main = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Projects' element={<Projects/>}></Route>
            <Route path='/Contacts' element={<Contacts/>}></Route>
        </Routes>
    );
}

export default Main;