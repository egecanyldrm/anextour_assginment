import React from 'react'

const Upper = ({upper}) => {
    return (
        <div className="upper d-flex ">
            {upper.map((item, key) => {
                return (
                    <div className='links  col-lg-3 col-6' key={key}>
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Upper