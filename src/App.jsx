import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//Components

import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;