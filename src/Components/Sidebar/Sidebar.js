import React,{useState,useEffect} from 'react'
import './Sidebar.css'
import Card from '../UI/Card/Card'
import blogPost from '../../data/blog.json'
function Sidebar() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);
    },posts)
    return (
        <div className="sidebarContainer">
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>
                    About Us
                </span>
                
            </div>
            <div className="profileImage">
                    <img src="https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg" alt="" />
                </div>
                <div className="cardBody">
                   <p className="bio"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum adipisci ratione ipsam placeat quisquam illo amet odio, cumque ipsum beatae magnam eveniet officiis commodi quia minus veritatis voluptatibus libero nulla atque id, nisi vitae! Officiis quidem repudiandae aliquam non doloremque.</p>
                </div>
        </Card>
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>
                    Social Network
                </span>
            </div>
        </Card>
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>
                    Recent Posts
                </span>
            </div>
            <div className="recentPosts">
                {
                    posts.map(post=>{
                        return(
                            <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                </div>
                        );
                    })
                }
                
            </div>
        </Card>
        </div>
    )
}

export default Sidebar
