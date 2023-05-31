import React from 'react';
import './css/feature.css';





const Feature = () => {
    const feat = [
        {
            title: "Technical documentation",
            desc: "At Soman Global Technologies, we transform your needs into technical documentation, create project specifications, and connect with your stakeholders.",
            icon: require("../icons/gear.png"),
        },
        {
            title: "Technology Deployment",
            desc: "Our core technical orientation is wireless technologies and its general usages, ranging from indoor technology deployment to outdoor commisioning.",
            icon: require("../icons/increase.png"),
        },
        ,
        {
            title: "Project development",
            desc: "With project leadership expertise and IT background, we excel in delivering on time and within budget.",
            icon: require("../icons/laptop.png"),
        },
        {
            title: "Quality Test",
            desc: "Seamless system integration, rigorous testing, and zero downtime for superior products and delighted customers.",
            icon: require("../icons/upload.png"),
        },
    ]
  return (
    <>
    <section className="part3" id='part3'>
        <div>
            <p>Great way to start an <span>IT career</span> and start building work experience is with us.</p>
            <label for="">An ideal combination of gaining knowledge and applying this knowledge in a business environment is all makes a professional.</label>
        </div>
        <div className='offer'>
            <a href='#'>Get It Now</a>
        </div>
    </section>
    <section className="part4" id='features'>
        <div className="sec1">
            <p>features</p>
            <label>We have a unique characteristics that distiquish our professionalism.</label>
        </div>
        <div className="sec2">
            <div className="row-cont">
                    {feat.map((feat, index) => {
                            return (
                                <div className="row1">
                                    <img src={feat.icon} alt="icons" />
                                    <div>
                                        <p>{feat.title}</p>
                                        <label>{feat.desc}</label>
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

export default Feature