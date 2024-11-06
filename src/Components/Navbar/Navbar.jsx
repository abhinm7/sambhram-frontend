import { Link } from 'react-router-dom';
import './Navbar.css';
import RightDrawerMenu from '../RightDrawerMenu/RightDrawerMenu';
import sambhram_logo from '../../assets/sambhram_logo.png';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState('home');

    // Define the menu items
    const navItems = [
        { id: 'home', path: '/', label: 'Home' },
        { id: 'event', path: '/events', label: 'Event' },
        { id: 'contact', path: '/', label: 'Contact' },
        { id: 'about', path: '/', label: 'About' },
    ];

    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to='/' onClick={() => setMenu('home')}><img src={sambhram_logo} alt="Sambhram Logo" /></Link>
            </div>
            <div className="navbar-right">
                <div className="nav-items">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={() => setMenu(item.id)}
                            className={menu === item.id ? 'menu-active' : ''}
                        >
                            {item.label.toUpperCase()}
                        </Link>
                    ))}
                    <button>REGISTER</button>
                </div>
                <RightDrawerMenu />
            </div>
        </div>
    );
};

export default Navbar;
