import React from "react"

function Footer() {
    return(
        <div className="footer">
            <div className="older-posts-container">
                <div className="older-posts">
                    <h3>OLDER POSTS <i class="fas fa-long-arrow-alt-right"></i></h3>
                </div>
            </div>
            <hr className="footer-hr"/>
            <div className="icons">
                <div><i class="fab fa-twitter"></i></div>
                <div><i class="fab fa-facebook-f"></i></div>
                <div><i class="fab fa-github"></i></div>
            </div>
            <p className="copyright">Copyright <i class="far fa-copyright"></i> Your Website 2020</p>
        </div>
    )
}

export default Footer