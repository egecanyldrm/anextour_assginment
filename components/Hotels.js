import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import HotelCard from './HotelCard';
import Image from 'next/image';
import Logo from '../public/images/Footer_logo.png'
import Footer from './Footer';




const Hotels = ({ hotels, footer }) => {
    return (
        <section className=' hotels '>
            <div className="container">
                <div className="row ">
                    <div className='col-xl-2 hotels-logo'>
                        <Image src={Logo} />
                    </div>
                    <div className="ps-4 col-xl-10">
                        <Swiper
                            // slidesPerView={5}
                            // spaceBetween={0}
                            slidesPerGroup={5}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper "
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 0
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 0
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 80,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1140: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                            }}
                        >
                            {
                                hotels.map((hotel, key) => {
                                    return (
                                        <SwiperSlide key={key}> <HotelCard {...hotel} /> </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>
                        <Footer {...footer} />
                    </div>
                </div>

            </div>
        </section>
    )
}


export default Hotels