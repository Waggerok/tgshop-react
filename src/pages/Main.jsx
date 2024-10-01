import React, { useEffect, useState } from 'react';

import iPhone from '../img/iPhone16promaxBlack.png';
import iPad from '../img/iPad.png';
import mac from '../img/Macbook.png';

//Components
import Product from '../components/UI/Product/Product';
import Input from '../components/UI/Input/Input';

const tg = window.Telegram.WebApp;

const Main = () => {

    useEffect(() => {
        tg.ready()
    }, []);

    const [searchQuerry, setSearchQuerry] = useState('');

    return (
        <div className="App">
            <Input 
                value={searchQuerry}
                onChange={e => setSearchQuerry(e.target.value)}
                placeholder='Поиск...'
            />

            <div>
                <select>
                    <option value="value1">По названию</option>
                    <option value="value1">По цене</option>
                </select>
            </div>

            <Product image={iPhone} title='iPhone 16 Pro Max Black' price='190000'/>
            <Product image={iPad} title='iPad 10.2 WIFI+Cell Grey' price='35000'/>
            <Product image={mac} title='Macbook Pro 16 M2 Gray' price='200000'/>
        </div>
    )
};

export default Main;