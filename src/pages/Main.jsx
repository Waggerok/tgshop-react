import React, { useEffect, useState } from 'react';

import iPhone from '../img/iPhone16promaxBlack.png';
import iPad from '../img/iPad.png';
import mac from '../img/Macbook.png';

//Components
// import Product from '../components/UI/Product/Product';
import Input from '../components/UI/Input/Input';
import Select from '../components/UI/Select/Select';
import ProductList from '../components/ProductList';

const tg = window.Telegram.WebApp;

const Main = () => {

    useEffect(() => {
        tg.ready()
    }, []);

    const [searchQuerry, setSearchQuerry] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    const [products,setProducts] = useState([
        {id:1, title: 'iPhone 16 Pro Max Black', image: iPhone, price: 190000 },
        {id:2, title: 'iPad 10.2 WIFI+Cell Grey', image: iPad, price: 35000},
        {id:3, title: 'Macbook Pro 16 M2 Gray', image: mac, price: 200000},
    ])

    const sortProduct = (sort) => {
        setSelectedSort(sort);
        setProducts([...products].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <Input 
                value={searchQuerry}
                onChange={e => setSearchQuerry(e.target.value)}
                placeholder='Поиск...'
            />

            <div>
                <Select 
                    value={selectedSort}
                    onChange={sortProduct}
                    defaultValue='Сортировка по'
                    options={[
                        {value: 'title', name: 'По названию'},
                        //сделать сортировку по цене
                    ]}
                />
            </div>

            <ProductList
                products={products}
            />
            
        </div>
    )
};

export default Main;