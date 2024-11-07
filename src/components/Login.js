import React, { useState, useRef, useContext ,useEffect } from "react";
import { useNavigate } from 'react-router-dom'; 
import { UserContext } from "./UserContext";  // Assuming you have a UserContext set up
import '../stylesSheets/Login.css';

export default function Login() {
    const [isRightPanelActive, setRightPanelActive] = useState(false);
    const [isGapiLoaded, setGapiLoaded] = useState(false);
    const nameref = useRef();
    const emailref = useRef();
    const passwordref = useRef();
    const logemailref = useRef();
    const logpassref = useRef();
    const signinpara = useRef();
    const signuppara = useRef();
    const navigate = useNavigate(); 
    const { setUser } = useContext(UserContext);  
    const [users, setUsers] = useState([]);  // Assuming you will manage user data

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    
    

    function add(event) {
        event.preventDefault();
        const newUser = {
            name: nameref.current.value,
            email: emailref.current.value,
            password: passwordref.current.value
        };   
        signuppara.current.textContent = "";

        // Check if user already exists
        const existingUser = users.find(user => user.email === newUser.email);
        if (existingUser) {
            signuppara.current.textContent = 'User already exists.';
            signuppara.current.style.color = 'red';
            return;
        }

        // Add user to the list
        setUsers(prevUsers => [...prevUsers, newUser]);
        signuppara.current.textContent = 'User registered successfully!';
        signuppara.current.style.color = 'green';
    }
    
    function Log(event) {
        event.preventDefault();
        const email = logemailref.current.value;
        const pass = logpassref.current.value;
        const foundUser = users.find(user => user.email === email && user.password === pass);
        signinpara.current.textContent = "";
        if (foundUser) {
            setUser({ name: foundUser.name, email: foundUser.email });  
            navigate('/home');  
        } else {
            signinpara.current.textContent = 'Email or Password is incorrect';
            signinpara.current.style.color = 'red';
        }
    }

    return (
        <div className="Parent">
            <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="main">
                <div className="sign-up">
                    <form action="#">
                        <h1>Create Account</h1>
                        <span className="social-container">
                            <a href="#">
                                <i className="fa-brands fa-google-plus-g"></i> {/* Google Icon */}
                            </a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </span>

                        <input type="text" ref={nameref} placeholder="Name" required />
                        <input type="email" ref={emailref} placeholder="Email" required />
                        <input type="password" ref={passwordref} placeholder="Password" required />
                        <p ref={signuppara}></p>
                        <button type="submit" onClick={add} className="login-btn">Sign Up</button>
                    </form>
                </div>

                <div className="sign-in">
                    <form action="#">
                        <h1>Sign In</h1>
                        <span className="social-container">
                            <a href="#">
                                <i className="fa-brands fa-google-plus-g"></i> {/* Google Icon */}
                            </a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </span>

                        <input type="email" ref={logemailref} placeholder="Email" required />
                        <input type="password" ref={logpassref} placeholder="Password" required />
                        <p ref={signinpara}></p>
                        <button type="submit" onClick={Log} className="login-btn">Sign In</button>
                    </form>
                </div>

                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-left">
                            <h1>Welcome Back!</h1>  
                            <p>To keep connected with us, please log in with your personal info</p>
                            <button onClick={handleSignInClick} className="login-btn" style={{border: '3px solid #ccc'}}>Sign In</button>
                        </div>
                        <div className="overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start your journey with us</p>
                            <button onClick={handleSignUpClick} className="login-btn" style={{border: '3px solid #ccc'}}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
