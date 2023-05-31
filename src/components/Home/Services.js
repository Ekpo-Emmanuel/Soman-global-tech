import React from 'react'
import './css/Services.css';


const Services = () => {
    const service = [
        {
            icon: require("../icons/globe.png"),
            title: 'Wireless technologies',
            desc: 'SGT has handful of capable engineers ready to deploy just for you',            
        },
        {
            icon: require("../icons/cart.png"),
            title: 'E-Commerce',
            desc: 'we co-developed Needshub.com Commerce and we see it grow as planned.',            
        },
        {
            icon: require("../icons/chart.png"),
            title: 'QA & Testing',
            desc: 'At Soman Global Technologies we generally ensures quality improve performance and give back to your consumers',            
        },
        {
            icon: require("../icons/laptop1.png"),
            title: 'Product Development',
            desc: 'Stakeholders decide which aspect SGT handles project leadership or technical documentation or both',            
        },
        {
            icon: require("../icons/document.png"),
            title: 'Technical documentation',
            desc: 'Stakeholders decide which aspect SGT handles project leadership or technical documentation or both.',            
        },
        {
            icon: require("../icons/electric.png"),
            title: 'Electrification',
            desc: 'For buildings we provide operations management services, condition audits, maintenance and development plans.',            
        },
    ]
  return (
    <>
        <section className="about" id='Services'>
        <div className="set1">
            <p>Services</p>
            <label>SGT has good range of services within IT, wireless technologies & embedded systems</label>
        </div>
        <div className="set2">
            <div className="row-cont">
                {service.map((service, index) => {
                        return (
                            <div className="row1">
                                <img src={service.icon} alt="icons" />
                                <div className='text'>
                                    <p>{service.title}</p>
                                    <label>{service.desc}</label>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Services