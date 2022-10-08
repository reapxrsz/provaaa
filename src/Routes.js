import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acai from './acai/acai.js';
import Gramas from './gramas/gramas.js';
import Libra from './libra/libra.js';

export default function Index(){
    return(
        <React.StricMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/acai' element={<Acai />}></Route>
                    <Route exact path='/gramas' element={<Gramas />}></Route>
                    <Route exact path='/libra' element={<Libra />}></Route>
                </Routes>
            </BrowserRouter>
        </React.StricMode>
    )
}