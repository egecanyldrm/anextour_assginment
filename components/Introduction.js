import Image from 'next/image'
import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'
import Content from './Content'
import IntroductionImage from '../public/images/Introduction_image.png'

const Introduction = (props) => {
    const { title, subtitle, content } = props;
    return (
        <section className='  introduction container  '>
            <div className="row">
                <div className="content col-lg-6">
                    <Title title={title} />
                    <Subtitle subtitle={subtitle} />
                    <Content content={content} />
                </div>
                <div className=" col-lg-6">
                    <Image
                        src={IntroductionImage}
                        layout='responsive'
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Introduction