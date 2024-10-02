import React, { useEffect, useMemo, useState } from 'react';

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

    const [products,setProducts] = useState([
        {id:1, title: 'iPhone 16 Pro Max Black', image: iPhone, price: 190000 },
        {id:2, title: 'iPad 10.2 WIFI+Cell Grey', image: iPad, price: 35000},
        {id:3, title: 'Macbook Pro 16 M2 Gray', image: mac, price: 200000},
    ]);


    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuerry, setSearchQuerry] = useState('');
    
    const sortedProducts = useMemo(() => {
        if (selectedSort) {
            return [...products].sort((a,b) => {
                if (selectedSort === 'price') {
                    return a[selectedSort] - b[selectedSort];
                } else {
                    return a[selectedSort].localeCompare(b[selectedSort]);
                }
            })
        }
        return products;
    }, [selectedSort,products])

    const sortedAndSearchedProducts = useMemo(() => {
        return sortedProducts.filter(product => product.title.toLowerCase().includes(searchQuerry));
    }, [searchQuerry, sortedProducts]);

    console.log(setProducts)
    
    const sortProduct = (sort) => {
        setSelectedSort(sort);
    };

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
                        {value: 'price', name: 'По цене'},
                        //сделать сортировку по цене
                    ]}
                />
            </div>

            {sortedAndSearchedProducts.length
            ?
            <ProductList products={sortedAndSearchedProducts}/>
            :
            <h2 style={{textAlign: 'center'}}>
                Товар не найден!
            </h2>
            }
            
        </div>
    )
};

export default Main;