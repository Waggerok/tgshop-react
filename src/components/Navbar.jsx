import React from 'react';
import { Link } from 'react-router-dom';

//Logos
import { IoCartOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="header">
            <nav className='header__navbar'>
                <ul className='header__navbar_links'>
                    <li className='header__navbar_links-item'>
                        <Link to='/main'>
                            <IoHomeOutline/>
                            Главная
                        </Link>
                    </li>
                    <li className='header__navbar_links-item'>
                        <Link to='/cart'>
                            <IoCartOutline/>
                            Корзина
                        </Link>
                    </li>
                    <li className='header__navbar_links-item'>
                        <Link to='/orders'>
                            <CiShoppingBasket/>
                            Заказы
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;