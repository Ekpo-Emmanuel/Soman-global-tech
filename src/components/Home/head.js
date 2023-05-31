import React from 'react';
import './css/head.css';

const Head = () => {
  return (
    <>
    <div className='ahead' id='Home'>
        <div className="text">
            <span>Welcome to</span>
            <p>Soman Global technology</p>
            <label htmlFor="">Since 2002 we are dedicated and with sound background of cognate experience, in problems and solutions related to Information Technology and Management service.</label>
            <a href="#">Get started</a>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L48,288C96,288,192,288,288,282.7C384,277,480,267,576,234.7C672,203,768,149,864,160C960,171,1056,245,1152,229.3C1248,213,1344,107,1392,53.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    </>
  )
}

export default Head