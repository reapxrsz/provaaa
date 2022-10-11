import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acai from './acai/acai.js';
import Gramas from './gramas/gramas.js';
import Libra from './libra/libra.js';
import Febre from  './febre/febre.js';
import Paradas from './paradas/paradas.js';
import Salario from './salario/salario.js';

export default function Index(){
    return(
        <React.StricMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/acai' element={<Acai />}></Route>
                    <Route exact path='/gramas' element={<Gramas />}></Route>
                    <Route exact path='/libra' element={<Libra />}></Route>
                    <Route exact path='/febre' element={<Febre />}></Route>
                    <Route exact path='/paradas' element={<Paradas />}></Route>
                    <Route exact path='/salario' element={<Salario />}></Route>
                </Routes>
            </BrowserRouter>
        </React.StricMode>
    )
}