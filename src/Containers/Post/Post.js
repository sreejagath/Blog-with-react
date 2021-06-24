import React from 'react'
import './Post.css'
import BlogPost from '../../Components/BlogPost/BlogPost';
import Card from '../../Components/UI/Card/Card';
import Sidebar from '../../Components/Sidebar/Sidebar'
function Post(props) {
    console.log(props);
    return (
        <section className="container">
            <BlogPost props{...props}/>
            <Sidebar/>
        </section>
    )
}

export default Post
