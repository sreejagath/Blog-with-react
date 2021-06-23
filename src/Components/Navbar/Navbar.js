import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import search from '../assets/icons/search.png'
function Navbar() {
    const [searching, setSearching] = useState(false)
    const openSearch=()=>{
        setSearching(true);
        console.log(searching);
    }
    const submitSearch=(e)=>{
        e.preventDefault();
        alert('searched');
    }
    const searchClass = searching ? 'searchInput active' : 'searchInput';
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search here..."/>
                <img onClick={openSearch} className="searchicon" src={search} alt="Search" />
                </form>
 </div>
        </div>
    )
}

export default Navbar
