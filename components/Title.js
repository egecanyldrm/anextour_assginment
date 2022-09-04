import React from 'react'

const Title = ({ title }) => {
    return (
        <div>
            <h1 dangerouslySetInnerHTML={{ __html: title }} className='title'></h1>
        </div>
    )
}

export default Title