import React,{useState} from 'react'
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
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Posts</a></li>
                <li><a href="#">Contact Us</a></li>
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
