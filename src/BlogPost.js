import React from "react"

function BlogPost(props) {
    return(
        <div className="blog-container">
            <div className="blog-titles-container">
                <h3 className="blog-title">{props.title}</h3>
                <p className="blog-subtitle">{props.subTitle}</p>
            </div>    
                <p className="blog-author">Posted by <span>{props.author}</span> on {props.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost