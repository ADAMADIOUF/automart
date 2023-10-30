import React from 'react'
import BookingForm from './Booking'

const SecondBanner = () => {
  return (
    <div className='second-banner'>
      <div className='overlay-1'></div>
      <div className='container-second-banner section-nav'>
        <article className='second-banner-content'>
          <h3>Certified and Award Winning Car Repair Service Provider</h3>
          <p>
            Discover unparalleled automotive excellence at Auto Mart,
            where our ASE-certified technicians deliver award-winning car repair
            services. Equipped with state-of-the-art tools, we ensure precision
            in every repair, from routine maintenance to complex issues. We
            pride ourselves on transparent pricing, fast turnaround times, and a
            customer-centric approach, guaranteeing satisfaction with every
            service. Choose us for reliable, high-quality car care that stands
            out in the industry.
          </p>
        </article>
        <BookingForm/>
      </div>
    </div>
  )
}

export default SecondBanner
