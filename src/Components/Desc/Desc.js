import React from 'react'
import './Desc.css'
import Card from '../UI/Card/Card'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
function Desc() {
    return (
        <div>
            <Card>
                <div style={{padding:'50px 0'}}>
                <Logo/>
                </div>
                <Navbar/>
            </Card>
        </div>
    )
}

export default Desc
