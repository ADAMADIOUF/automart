import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: '',
    date: '',
    message: '',
    phoneNumber:"",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/.netlify/functions/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          services: '',
          date: '',

          message: '',
          phoneNumber:"",
        })
        setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
      } else {
        const errorData = await response.json()
        setMessage(`Failed to send message. ${errorData.message || ''}`)
        setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
      setTimeout(() => setMessage(''), 3000) // Clear message after 3 seconds
    }

    setIsSubmitting(false)
  }

  return (
    <div className='booking'>
      <h3>Book For A Service</h3>
      <form onSubmit={handleSubmit} className='booking-form'>
        <div className='booking-container'>
          <input
            type='text'
            placeholder='Your Name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className='booking-container'>
          <input
            type='text'
            placeholder='Select A Service'
            value={formData.services}
            onChange={(e) =>
              setFormData({ ...formData, services: e.target.value })
            }
            required
          />
          <input
            type='date'
            placeholder='Date'
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            min='2023-01-01'
            max='2023-12-31'
            required
          />
        </div>
        <div className='booking-container'>
          <input
            type='number'
            placeholder='Phone Number'
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            required
            className='input-text-area'
          />
          
        </div>
        <div className='booking-container'>
          <input
            placeholder='Special Request'
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className='input-text-area'
          />
        </div>
        <div className='booking-container'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='btn btn-book'
          >
            Book Now
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Contact
