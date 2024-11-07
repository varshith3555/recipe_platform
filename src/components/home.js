import React from "react";
import chef1 from '../images/chef1-removebg-preview.png';

import '../stylesSheets/home.css';
export default function Home(){
    console.log("Home");
    return(
        <div className="Home" id="Home">
            <div className="Container-1">
                <h2>Hey there!</h2>
                <h1>Here We Share Our Recipes With You</h1>
                <p>Join us on a flavorful adventure as we bring together food lovers from all walks of life. Our platform is designed for you to explore a wide range of recipes, from quick weeknight dinners to elaborate holiday feasts. Share your culinary masterpieces, discover new favorites, and connect with fellow cooking enthusiasts. Let's create delicious memories together!</p>
            </div>
            <div className="Container-2">
                <img src={chef1} alt="chef1"></img>
                
            </div>
        </div>
    ) 
}