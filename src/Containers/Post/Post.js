import React from 'react'
import './Post.css'
import BlogPost from '../../Components/BlogPost/BlogPost';
import Card from '../../Components/UI/Card/Card';
function Post() {
    return (
        <section className="container">
            <div className="blogPost">blogPost</div>
            <BlogPost/>
            <div className="sidebar">sidebar</div>
        </section>
    )
}

export default Post
