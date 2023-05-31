import React from 'react'
import './css/Footer.css';

const Footer = () => {
    const socialLks = [
        {
            url: '#',
            img: require("../icons/messenger.png"),
        },
        {
            url: '#',
            img: require("../icons/twitterbird.png"),
        },
        {
            url: '#',
            img: require("../icons/linkedin.png"),
        },
        {
            url: '#',
            img: require("../icons/github.png"),
        },
    ]
  return (
    <>
    <section className="footer" id='contact'>
        <div className="s1">
            <span>2015 Soman Global Technologies Product</span>
        </div>
        <div className="s2">
            {socialLks.map((socialLks, index) => {
                return (
                <a href={socialLks.url}><img src={socialLks.img} alt="" /></a>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default Footer