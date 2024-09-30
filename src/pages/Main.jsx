import React, { useEffect } from 'react';

//Components
import Product from '../components/UI/Product/Product';

const tg = window.Telegram.WebApp;

const Main = () => {

    useEffect(() => {
        tg.ready()
    }, []);

    return (
        <>
            <Product/>
        </>
    )
};

export default Main;