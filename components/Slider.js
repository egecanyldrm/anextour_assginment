import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import SliderImg from '../public/images/Home_slider.png'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item >
                <div className='carousel_img' >
                    <Image
                        src={SliderImg}
                        layout='fill'
                        objectFit='cover'
                        priority
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className='carousel_img' >
                    <Image
                        src={SliderImg}
                        layout='fill'
                        objectFit='cover'
                        priority

                    />
                </div>
            </Carousel.Item>
        </Carousel>

    )
}

export default Slider