import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from '../pages/Main';
import Cart from '../pages/Cart';
import Orders from '../pages/Orders';

const AppRouter = () => {
    return(
        <Routes>
            <Route path='*' element={<Main/>}></Route>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='orders' element={<Orders/>}></Route>
        </Routes>
    )
};

export default AppRouter;

