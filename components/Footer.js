import React from 'react'
import Lower from './Lower'
import Upper from './Upper'

const Footer = (props) => {
  const { upper, lower, reserved } = props
  return (
    <section className='footer'>
      <Upper upper={upper} />
      <Lower lower={lower} reserved={reserved} />
    </section>
  )
}

export default Footer