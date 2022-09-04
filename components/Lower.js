import React from 'react'

const Lower = ({ reserved, lower }) => {
    return (
        <div className='row'>

            <div className="lower col-lg-9 row  ">
                {lower.map((item, key) => {
                    return (
                        <div className='links col-4' key={key}>
                            <span >{item.name}</span>
                        </div>
                    )
                })}
            </div>
            <div className='col-lg-3  footer-copyright'>  © 2018 {reserved}  </div>
        </div>
    )
}

export default Lower