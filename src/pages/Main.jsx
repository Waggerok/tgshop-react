import React, { useEffect } from 'react';

//Components
import Product from '../components/UI/Product/Product';

const tg = window.Telegram.WebApp;

const Main = () => {

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <div className="App">
            <Product/>
        </div>
    )
};

export default Main;