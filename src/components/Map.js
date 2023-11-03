import React from 'react'

const Map = () => {
  return (
    <div className='map'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.795801819298!2d-101.22819852357449!3d48.22980644473577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ded5b61bf65003%3A0xd08c776b632b8a6d!2s4505%20E%20Burdick%20Expy%2C%20Minot%2C%20ND%2058701!5e0!3m2!1sen!2sus!4v1699028217099!5m2!1sen!2sus'
        width='600'
        height='450'
        
        allowfullscreen=''
        loading='lazy'
        referrerpolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  )
}

export default Map
