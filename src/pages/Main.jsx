import React, { useEffect } from 'react';
const tg = window.Telegram.WebApp;


const Main = () => {

    useEffect(() => {
        tg.ready()
    }, []);

    const closeApp = () => {
        tg.close();
    }

    return (
        <>
            work
            <button onClick={closeApp}>Закрыть</button>
        </>
    )
};

export default Main;