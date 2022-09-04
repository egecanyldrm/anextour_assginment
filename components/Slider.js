import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import SliderImg from '../public/images/Home_slider.png'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Image
                        src={SliderImg}
                        layout='responsive'
                        priority
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        src={SliderImg}
                        layout='responsive'
                        priority
                    />
                </Carousel.Item>
            </Carousel>

        </div>)
}

export default Slider