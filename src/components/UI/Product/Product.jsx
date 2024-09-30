import React from 'react';
import styles from './Product.module.css'

import iPhone from '../../../img/iPhone16promaxBlack.png';

const Product = () => {
    return(
        <div className={styles.card}>
            <div className={styles.card__items}>
                <div className={styles.card__items_image}>
                    <img src={iPhone} alt='phone'/>
                </div>
                <div className={styles.card__items_title}>
                    iPhone 16 Pro max 256Gb Black
                </div>
                <div className={styles.card__items_price}>
                    <b>190000 руб.</b>
                </div>
            </div>
        </div>
    );
};

export default Product;