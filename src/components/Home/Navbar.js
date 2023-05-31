import React from 'react'
import './css/navbar.css';
import { useRef } from 'react';


const Navbar = () => {
    const navRef = useRef();
    const check = [
        {
            title: "Home",
            url: "/",
            cName: "nav-links"
        },
        {
            title: "Features",
            url: "#features",
            cName: "nav-links"
        },
        {
            title: "About",
            url: "#About",
            cName: "nav-links"
        },
        {
            title: "Services",
            url: "#Services",
            cName: "nav-links"
        },
        // {
        //     title: "Portfolio",
        //     url: "#",
        //     cName: "nav-links"
        // },
        // {
        //     title: "Team",
        //     url: "#Team",
        //     cName: "nav-links"
        // },
        {
            title: "Pricing",
            url: "#price",
            cName: "nav-links"
        },
        {
            title: "Contact",
            url: "#contact",
            cName: "nav-links"
        },
        {
            title: "Get Started",
            url: "#",
            cName: "nav-links active1"
        },
    ]
    const ShowNavbar = ()=> {
        navRef.current.classList.toggle("responsive_nav")
    }
  return (
    <>
        <nav>
            <div className="logo" >
                <span></span>
                <a href=''>Soman Global Tech.</a>
                </div>
            <div className="links" ref={navRef}>
                <ul className="flex">
                    {check.map((check, index) => {
                        return (
                            <li><a href = {check.url} className={check.cName}
                            >{check.title}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div className='bars' onClick={ShowNavbar}>
                <img src={require("../icons/bars.png")} width="30px"></img>
            </div>
        </nav>
    </>
  )
}

export default Navbar