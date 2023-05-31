import React from 'react'
import './css/Pricing.css';

const Pricing = () => {
    const price = [
        {
            type: "basic",
            pos: "Perfect for starters",
            cost: "$15,000",
            desc: "  /year",
            plan: "Basic",
            icon: require("../icons/gcheck.png"),
            l1: '1 Domain',
            l2: '2GB Disk Space',
            l3: '50000 bandwidth',
            l4: 'On-Demand SSL Certificate',
            l5: '5 Emails',
            l6: '24/7 Support',
        },
        {
            class: "checked",
            type: "business",
            pos: "Perfect for Business",
            cost: "$20,000",
            desc: "  /year",
            plan: "Business",
            icon: require("../icons/gcheck.png"),
            l1: '1 Domain',
            l2: '5GB Disk Space',
            l3: 'Unlimited bandwidth',
            l4: 'On-Demand SSL Certificate',
            l5: '20 Emails',
            l6: '24/7 Support',
        },
        {
            type: "Professional",
            pos: "Perfect for developers",
            cost: "$30,000",
            desc: "  /year",
            plan: "Professional",
            icon: require("../icons/gcheck.png"),
            l1: '1 Domain',
            l2: '10GB Disk Space',
            l3: 'Unlimited bandwidth',
            l4: 'On-Demand SSL Certificate',
            l5: 'Unlimited Emails',
            l6: '24/7 Support',
        },
        {
            type: "Reseller",
            pos: "Perfect for Marketers",
            cost: "$50,000",
            desc: "  /year",
            plan: "Reseller",
            icon: require("../icons/gcheck.png"),
            l1: '10 Domains',
            l2: '10GB Disk Space',
            l3: 'Unlimited bandwidth',
            l4: 'On-Demand SSL Certificate',
            l5: 'Unlimited Emails',
            l6: '24/7 Support',
        },
    ]
  return (
    <>
    <section className="price" id='price'>
        <div className="sec1">
            <p>Pricing</p>
            <label>Below is the few categories of the available Web Hosting packages for your businesses All packages are hosted on our VPS/ Dedicated Linux server. Quad-core</label>
        </div>
        <div className="sec2">
            {price.map((price, index) => { 
                return (
                    <div className="row1">
                        <div className="s1">
                            <p>{price.type}</p>
                            <span>{price.pos}</span>
                        </div>
                        <div className="s2">
                            <p>{price.cost}<span>{price.desc}</span></p>
                        </div>
                        <div className="s3">
                            <div className="cc">
                                <img src={price.icon} alt="" />
                                <span>{price.l1}</span> 
                            </div>
                            <div className="cc">
                                <img src={price.icon} alt="" />
                                <span>{price.l2}</span>
                            </div>
                            <div className="cc">
                                <img src={price.icon} alt="" />
                                <span>{price.l3}</span>
                            </div>
                            <div className="cc">
                                <img src={price.icon} alt="" />
                                <span>{price.l4}</span>
                            </div>
                            <div className="cc">
                                <img src={price.icon} alt="" />
                                <span>{price.l5}</span>
                            </div>
                            <div className="cc">
                                <img src={price.icon} alt="" />
                                <span>{price.l6}</span>
                            </div>
                            <div className="cc">
                                <a href="#">Purchase</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default Pricing