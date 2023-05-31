import React from 'react'
import './css/Testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Testimonial = () => {
    const testi = [
        {
            img: require("../images/03(1).jpg"),
            name: 'Kunle Omisore',
            title: 'Skyrace International',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque debitis distinctio in, repellat, voluptatibus recusandae expedita, a amet obcaecati temporibus impedit dolorum commodi. Quas ea, sint tempora consectetur illo dolorem.',
        },
        {
            img: require("../images/02(1).jpg"),
            name: 'Yinka Ogunkoya',
            title: 'It Consultant',
            desc: 'It has roots in developing quality systems and enabling seamless flow of operations.',
        },
        {
            img: require("../images/02(1).jpg"),
            name: 'Dayo Akinkugbe',
            title: 'Orion technology',
            desc: "It delivered reliable streaming media on TV's via remote wireless communication in 2006-2007",
        },
        {
            img: require("../images/02(1).jpg"),
            name: 'Dayo Akinkugbe',
            title: 'Orion technology',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatem nemo impedit quasi porro placeat nihil, totam ipsam nostrum voluptates animi consequatur ipsum vero sunt, qui sapiente eligendi voluptatum fugiat!",
        }
    ]
  return (
    <>
    <section className='testimony'>
        <div className="sec1">
            <p>Testimonies</p>
            <label>Delivering excellently since 2002 here are some testimonials</label>
        </div>
        <div className="sec2">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                {testi.map((testi, index) => {
                        return (
                            <SwiperSlide>
                            <div className="s1">
                                <div className="img">
                                    <img src={testi.img} alt="" />
                                </div>
                                <div className="text">
                                    <p>{testi.name}</p>
                                    <span>{testi.title}</span>
                                </div>
                            </div>
                            <div className="s2">
                                <span>{testi.desc}</span>
                            </div>
                        </SwiperSlide>
                 )
                })}
            </Swiper>
        </div>
    </section>
    </>
  )
}

export default Testimonial