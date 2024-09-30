import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//Logos
import { IoCartOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = () => {

    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="header">
            <nav className='header__navbar'>
                <ul className='header__navbar_links'>
                    <li className={`header__navbar_links-item ${isActive('/main') ? 'active' : ''}`}>
                        <Link to='/main'>
                            <IoHomeOutline/>
                            Главная
                        </Link>
                    </li>
                    <li className={`header__navbar_links-item ${isActive('/cart') ? 'active' : ''}`}>
                        <Link to='/cart'>
                            <IoCartOutline/>
                            Корзина
                        </Link>
                    </li>
                    <li className={`header__navbar_links-item ${isActive('/orders') ? 'active' : ''}`}>
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