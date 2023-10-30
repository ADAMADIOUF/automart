import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    message:
      'The team at this dealership was fantastic. They helped me find the perfect car and gave me a great deal!',
  },
  {
    id: 2,
    name: 'Jane Doe',
    message:
      'I had my car repaired here and the service was outstanding. Quick, efficient, and reasonably priced!',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    message:
      'I’ve purchased two cars here and both times the experience was seamless. Highly recommend this dealership!',
  },
  {
    id: 4,
    name: 'Alice Brown',
    message:
      'The customer service here is top-notch. They really go above and beyond to make sure you’re satisfied.',
  },
  {
    id: 5,
    name: 'Chris Green',
    message:
      'Best place in town for car repairs. They are honest, reliable, and don’t overcharge.',
  },
  {
    id: 6,
    name: 'Patricia Smith',
    message:
      'I always bring my car here for servicing. The staff is friendly and they always do a great job.',
  },
  {
    id: 7,
    name: 'Robert White',
    message:
      'If you’re looking for a trustworthy dealership, this is the place. They have a great selection and fair prices.',
  },
  {
    id: 8,
    name: 'Linda Black',
    message:
      'I had a great experience buying my car here. The staff was helpful and made the process very easy.',
  },
  {
    id: 9,
    name: 'Daniel Brown',
    message:
      'This dealership has an excellent service department. They always take good care of my car.',
  },
]

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 5000,
  }
  return (
    <div className='testimonials section-center'>
      <div className='title'>
        <span>// TESTIMONIAL //</span>
        <h3>Our Clients Say!</h3>
      </div>
      <div className='testimonial-slider section-center'>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className='testimonial'>
              <h3 className='testimonial-name'>{testimonial.name}</h3>

              <p className='testimonial-message'>"{testimonial.message}"</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TestimonialSlider
