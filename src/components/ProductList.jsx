import React from 'react';
import Product from './UI/Product/Product';


const ProductList = ({products}) => {

    return (
        <>
            {products.map(item =>
                <Product key={item.id} title={item.title} image={item.image} price={item.price}>{item}</Product>
            )}
        </>
    );
};

export default ProductList;