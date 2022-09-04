import Image from 'next/image'
import React from 'react'
import { ArrowRight } from 'react-feather'

const HotelCard = ({ name, img }) => {
    if (!name && !img) return <p></p>
    else {
        return (
            <div className='hotelcard'>
                <div>
                    <h2>ASTERIA</h2>
                    <h2>{name}</h2>
                </div>
                <div className='image'>
                    <Image
                        src={img}
                        layout='fill' />
                </div>
                <div>
                    <span className='button'>
                        <ArrowRight color='orange' />
                    </span>
                </div>
            </div>
        )
    }
}

export default HotelCard