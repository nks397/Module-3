import React from "react"

function Navbar() {
    return(
    <div>
        <div className="navbar">
            <h3 className="start-bootstrap">Start Bootstrap</h3>
            <div className="navbar-laptop-mode">
                <h3 className="start-bootstrap-laptop-mode">Start Bootstrap</h3>
                <h4 class="navbar-laptop-items">HOME</h4>
                <h4 class="navbar-laptop-items">ABOUT</h4>
                <h4 class="navbar-laptop-items">SAMPLE POST</h4>
                <h4 class="navbar-laptop-items">CONTACT</h4>
            </div>
            
            <button className="menu-btn">MENU <i class="fas fa-bars"></i></button>
        </div>
        <div className="title-div">
            <h1>Clean Blog</h1>
            <p>A Blog Theme by Start Bootstrap</p>
        </div> 
    </div>  
    )
}

export default Navbar