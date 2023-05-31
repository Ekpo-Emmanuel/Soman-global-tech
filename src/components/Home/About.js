import React from 'react'
import './css/About.css';
import Aboutimg from '../images/about3.png'
import Plusicon from '../icons/plus.png';


const About = () => {
  return (
    <>
    <section className="part5" id='About'>
        <div className="set1">
            <p>About Us</p>
            <label>Since year 2002, SGT idea was conceived by an individual, put together by group of professionals
                who are dedicated and with sound background of cognate experience, in problems and solutions related to:</label>
        </div>
        <div className="set2">
            <div className="pack1">
            <span></span>
                <p>Our Company</p>
                <label>Soman Global Technologies is numerous as we have long term experience within IT, information systems and integrating wireless technologies into your businesses .We deliver quality consulting in translating your requirement into useful technical details usable by any back-end developers.
                Our special expertise in building electrification includes electrification design for demanding applications, such as commercial and industrial real estates and hotels.</label>
                <a href="#">Read More <img src={Plusicon} alt="" /></a>
            </div>
            <div className="img">
                <img src={Aboutimg} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default About