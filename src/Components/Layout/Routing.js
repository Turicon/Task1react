import { Route, Routes } from 'react-router-dom'
import React from 'react';
import About from '../Pages/About';
import Home from '../Pages/Home';


function Routing(props) {
    return (
        <React.Fragment>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </React.Fragment>
    );
}

export default Routing;
