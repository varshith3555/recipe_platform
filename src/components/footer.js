import React from "react";
import '../stylesSheets/footer.css';
export default function Footer(){
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return(
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>Sharing delicious recipes from around the world! Follow us for more tasty inspiration.</p>
                    </div>
                    
                    <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li onClick={()=>scrollToSection('Home')}>Home</li>
                        <li onClick={()=>scrollToSection('Recipe')}>Recipes</li>
                        <li onClick={()=>scrollToSection('About')}>About Us</li>
                        <li onClick={()=>scrollToSection('Contact')}>Contact</li>
                    </ul>
                    </div>
                    
                    <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: varshith@gmail.com</p>
                    <p>Phone: +919347910680</p>
                    <div className="socials">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2024 DishHub | All rights reserved
                </div>
            </footer>

        </>
    )
}