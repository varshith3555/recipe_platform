import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import Home from './home';
import LOGO from '../images/logo.png'
import '../stylesSheets/Navbar.css';
import Slider from './Slider';
import Recipe from './recipe';
import About from './About';
import Contact from './Contact';
import Footer from './footer';
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.nav');
            if (window.scrollY > 0) {
                nav.style.backgroundColor = 'white';
                nav.style.color = 'black';
            } else {
                nav.style.backgroundColor = 'rgb(198, 222, 230)';
                nav.style.color = 'black';
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    

    function handleLoginClick() {
        navigate('/login'); 
    }

    function toggleMenu() {
        setMenuOpen(!menuOpen);
        setDropdownOpen(false); 
    }

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen); 
        setMenuOpen(false); 
    }

    function handleLogout() {
        setUser(null); 
        setDropdownOpen(false); 
        window.location.reload(); 
    }

    return (
        <>
        <nav className="nav">
            <img className='logo' src={LOGO} alt="logo"></img>

            <ul className="ul">
                <li className="li" onClick={() => scrollToSection('Home')}>Home</li>
                <li className="li" onClick={() => scrollToSection('Recipe')}>Recipe</li>
                <li className="li" onClick={() => scrollToSection('About')}>About us</li>
                <li className="li" onClick={() => scrollToSection('Contact')}>Contact us</li>
            </ul>


            <button className="btn" onClick={user ? toggleDropdown : handleLoginClick}>
                {user ? <i className="fas fa-user"></i> : 'Login'}
            </button>

            {user && dropdownOpen && ( 
                <div className={`user-dropdown show`}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}

            <div className="menu-icon" onClick={toggleMenu}>
                <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            {menuOpen && (
                <ul className="dropdown">
                    <li className="li" onClick={() => scrollToSection('Home')}>Home</li>
                    <li className="li" onClick={() => scrollToSection('Recipe')}>Recipe</li>
                    <li className="li" onClick={() => scrollToSection('About')}>About us</li>
                    <li className="li" onClick={() => scrollToSection('Contact')}>Contact us</li>
                </ul>
            
            )}
        </nav>
        <Home></Home>
        <Slider user={user}></Slider>
        <Recipe></Recipe>
        <About></About>
        <Contact></Contact>
        <Footer></Footer>
        </>
    );
}
