import React from "react";

const Header = () =>{
    return (
        <div className="Header">
            <div className="Headerwrap"> 
                <div className="leftNav">
                    <img  className="logo" src="/mamamoni.png"/>
                </div>
                <div className="rightNav">
                    <nav>Home</nav>
                    <nav>About</nav>
                    <nav>Our programs</nav>
                    <nav>Become a Volunteer</nav>
                    <nav>Blogs & Events</nav>
                    <nav>Contact</nav>
                    <nav>Gallery</nav>
                </div>
            </div>
           
        </div>

    )
};

export default Header;