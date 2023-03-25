import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './HomePage/IndexApp';
import Projects from './ProjectPage/ProjectApp';

const Main = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Projects' element={<Projects/>}></Route>
        </Routes>
    );
}

export default Main;