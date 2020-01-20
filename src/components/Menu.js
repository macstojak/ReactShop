import React from "react"
import {NavLink} from "react-router-dom"
import NavbarStyle from "../styles/Navbar.module.css"
import "../styles/General.css"
const Menu = () => {
    return(
        <nav className={NavbarStyle.navbar}>
            <div className="container">
                <ul className={NavbarStyle.nav}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/catalog">Catalog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Menu;