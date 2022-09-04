import Image from 'next/image'
import React from 'react'
import Content from './Content'
import Subtitle from './Subtitle'
import Title from './Title'
import OfferImage from '../public/images/Offer_image.png'
import { ArrowRightCircle } from 'react-feather'

const OfferSection = (props) => {
    const { title, subtitle, content, image_title, image_subtitle } = props;
    return (
        <section className='container mb-5 offersection '>
            <div className='offer '>
                <Title title={title} />
                <Subtitle subtitle={subtitle} />
                <Content content={content} />
            </div>
            <div className='offer_image' >
                <Image
                    src={OfferImage}
                    layout='responsive'
                    priority
                />
                <div className='offer_button d-flex justify-content-between'>
                    <div className='col-11'>
                        <h4>{image_title}</h4>
                        <h6>{image_subtitle}</h6>
                    </div>
                    <div className='col-1 mx-4'>
                        <ArrowRightCircle className='arrow_right' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferSection