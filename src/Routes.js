import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Index(){
    return(
        <React.StricMode>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={</>}></Route>
                    <Route exact path='/' element={</>}></Route>
                    <Route exact path='/' element={</>}></Route>
                </Routes>
            </BrowserRouter>
        </React.StricMode>
    )
}