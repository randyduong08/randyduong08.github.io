import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './App';
import Projects from './ProjectPage/ProjectApp';

const Main = () => {
    return(
        <Routes>
            <Route exact path='/' element={Home}></Route>
            <Route exact path='/Projects' element={Projects}></Route>
        </Routes>
    );
}

export default Main;