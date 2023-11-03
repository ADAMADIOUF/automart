import React, { useState } from 'react'
import { FaWrench, FaCarBattery, FaOilCan } from 'react-icons/fa'
import { GiFlatTire } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const HomeServices = () => {
  const services = [
    {
      name: 'Diagnostic Test',
      image: './images/a1.png',
      icon: <FaWrench />,
    },
    {
      name: 'Engine Servicing',
      image: './images/a2.png',
      icon: <FaCarBattery />,
    },
    {
      name: 'Tires Replacement',
      image: './images/a3.png',
      icon: <GiFlatTire />,
    },
    {
      name: 'Oil Changing',
      image: './images/a4.png',
      icon: <FaOilCan />,
    },
  ]

  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <div className='home-services-services section-center'>
      <div className='title'>
        <span>// our services //</span>
        <h3>explore our services</h3>
      </div>
      <div className='home-services-services-diagnostic'>
        <article className='btn-home-services-container'>
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setSelectedService(service)}
              className={`btn-home-services ${
                selectedService.name === service.name
                  ? 'active-btn-services'
                  : ''
              }`}
            >
              <div className='services-btn'>
                <span>{service.icon}</span>
                <span>{service.name}</span>
              </div>
            </button>
          ))}
        </article>
        <article>
          {selectedService && (
            <div>
              <h2>{selectedService.name}</h2>
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className='home-services-img'
              />
            </div>
          )}
        </article>

        <article>
          <h3>15 Years Of Experience In Auto Servicing</h3>
          <p>
            At our auto servicing center, we believe that our 15 years of
            experience is more than just a testament to our longevity; it is a
            reflection of our unwavering dedication to automotive excellence,
            our deep-rooted passion for cars, and our relentless pursuit of
            customer satisfaction. We are grateful to our loyal customers and
            the community for entrusting us with their vehicles over the years,
            and we look forward to continuing to serve as your go-to destination
            for all your auto servicing needs for many more years to come.
          </p>
          <button className='btn'>
            <Link to={`/services`}>read more</Link>
          </button>
        </article>
      </div>
    </div>
  )
}

export default HomeServices
