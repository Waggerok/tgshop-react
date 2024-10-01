import React from 'react';
import styles from './Product.module.css'

// import iPhone from '../../../img/iPhone16promaxBlack.png';

const Product = (props) => {
    return(
        <div className={styles.card}>
            <div className={styles.card__items}>
                <div className={styles.card__items_image}>
                    <img src={props.image} alt='phone'/>
                </div>
                <div className={styles.card__items_title}>
                    {props.title}
                </div>
                <div className={styles.card__items_price}>
                    <b>{props.price} руб.</b>
                </div>
            </div>
        </div>
    );
};

export default Product;