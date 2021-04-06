import React from "react"
import BlogPost from "./BlogPost"
import blogData from "./blogData"

function BlogList() {
    const blogComponents = blogData.map(function(blogs){
        return (<BlogPost key={blogs.id} title={blogs.title} subTitle={blogs.subTitle} author={blogs.author} date={blogs.date}/>)
    })

    return(
        <div>
            {blogComponents}
        </div>
    )
}

export default BlogList