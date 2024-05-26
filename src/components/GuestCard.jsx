import React from 'react'

const GuestCard = ({image, text, name, from}) => {
  return (
    <div className='guestCard col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0'>
        <img src={image} alt="" />
        <p>{text}</p>
        <h5>{name}</h5>
        <span>{from}</span>
    </div>
  )
}

export default GuestCard