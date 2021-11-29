import {React, useState} from 'react'
import './Navbar.css'
import { FaSun, FaMoon } from "react-icons/fa";


function Navbar() {

    const [mode, setMode] = useState(false); 
    const handleOnClick = () => {
         setMode(!mode);  
    }



    return (
        <section className="navbar-container navbar-container-bckg-dark ">
            <div className="navbar">
                <div className="navbar-logo navbar-logo--white">
                    <img src={`${process.env.PUBLIC_URL}/assets/navbar/BlueChickenFMLogo.png`} alt="logo"/>
                    <h1 className="navbar-logo-title">BlueChickenFM</h1>
                </div>
                <div className="navbar-right">
                    <div className="navbar-search">
                        <input  className="navbar-search-searchbar" type="search" size="15" placeholder="Search..."/>
                    </div>
                    <div className="navbar-toggle">
                        { mode ? 
                        (<FaSun onClick={handleOnClick }/>)
                            :
                        (<FaMoon onClick={handleOnClick }/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
