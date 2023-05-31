import React from 'react'
import './css/Team.css'; 
import TeamImg from '../images/01.jpg';


const Team = () => {
    const teams = [
        {
            img: require("../images/01(1).jpg"),
            name: "Ajayi Femi",
            title: 'Founder',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique vitae sapiente accusamus et neque corrupti eos",
        },
        {
            img: require("../images/02(1).jpg"),
            name: "E. OLUWOLE",
            title: 'president',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique vitae sapiente accusamus et neque corrupti eos",
        },
        {
            img: require("../images/03(1).jpg"), 
            name: "FALADE MUYIWA",
            title: 'Architect',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique vitae sapiente accusamus et neque corrupti eos",
        },
        {
            img: require("../images/02(1).jpg"),
            name: "TOYIN AKINSEYE",
            title: 'Manager',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique vitae sapiente accusamus et neque corrupti eos",
        },
    ]
  return (
    <>
    <section className="part6" id='Team'>
        <div className="set1">
            <p>Amazing Team</p>
            <label>Working together with great minds with strong background in their area of specialization
                brought our years of successes.</label>
        </div>
        <div className="set2">
            {teams.map((teams, index) => {
                        return (
                        <div className='row'>
                            <div className="img">
                                <img src={teams.img} alt="member" />
                            </div>
                            <div className="text">
                                <p>{teams.name}</p>
                                <label>{teams.title}</label>
                                <span>{teams.desc}</span>
                            </div>
                        </div>
                 )
                })}
        </div>
    </section>
    </>
  )
}

export default Team