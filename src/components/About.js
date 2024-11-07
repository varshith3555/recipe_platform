import React from "react";
import chef from '../images/about-chef.png'
import p1 from '../images/person1.jpeg'
import p2 from '../images/person2.jpeg'
import p3 from '../images/preson3.jpeg'
import p4 from '../images/person4.jpeg'
import '../stylesSheets/About.css';

export default function About(){
    return(
        <>
            <div className="about-container" id="About">
                <div className="about-container1">
                    <h4>Hello!!</h4>
                    <p>I'm the chef and creator behind the recipes on this site, with a mission to bring global flavors to your kitchen. Each recipe is crafted to be accessible, easy to follow, and designed to make every meal a joyful experience. Food, to me, is more than nourishment; it’s a way to connect, uplift, and bring happiness to those around us. I hope these recipes inspire creativity and culinary joy, transforming simple ingredients into extraordinary dishes. Let’s cook, share, and enjoy the journey of delicious food together. Welcome, and thank you for letting me be part of your kitchen!</p>
                </div>
                <div className="about-container2">
                    <img src={chef} alt="chef-img"></img>
                </div>
            </div>
            <section className="reviews">
                <h2>User Reviews</h2>
                <div className="review-container">
                    <div className="review">
                    <img src={p1} alt="User 1" className="profile-pic"/>
                    <h3>Alex</h3>
                    <p>"This recipe transformed my dinner party! Everyone loved it, and it was so easy to follow. Highly recommend!"</p>
                    <div className="stars">⭐⭐⭐⭐</div>
                    </div>

                    <div className="review">
                    <img src={p2} alt="User 2" className="profile-pic"/>
                    <h3>Michael</h3>
                    <p>"Absolutely delicious! I never thought I could make something this good at home. Thank you!"</p><br></br>
                    <div className="stars">⭐⭐⭐⭐</div>
                    </div>

                    <div className="review">
                    <img src={p3} alt="User 3" className="profile-pic"/>
                    <h3>Jessica</h3>
                    <p>"A perfect blend of flavors! My family enjoyed every bite. I’ll definitely be trying more recipes!"</p>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>

                    <div className="review">
                    <img src={p4} alt="User 4" className="profile-pic"/>
                    <h3>David</h3>
                    <p>"Simple and delicious! The instructions were clear, and the dish turned out fantastic. I’m a fan!"</p>
                    <div className="stars">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
            </section>

        </>
    )
}