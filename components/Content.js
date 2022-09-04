import React from 'react'

const Content = ({ content }) => {
    return (
        <div>
            <p dangerouslySetInnerHTML={{ __html: content }} className='content'></p>
        </div>
    )
}

export default Content