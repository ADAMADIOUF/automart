import React, { useState } from 'react'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/.netlify/functions/email', {
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
          message: '',
        
        })
        setTimeout(() => setMessage(''), 3000) 
      } else {
        const errorData = await response.json()
        setMessage(`Failed to send message. ${errorData.message || ''}`)
        setTimeout(() => setMessage(''), 3000) 
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
      setTimeout(() => setMessage(''), 3000) 
    }

    setIsSubmitting(false)
  }

  return (
    <div className='booking'>
      <h3>contact us</h3>
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
            placeholder='message'
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className='input-text-area-message '
          />
        </div>
        <div className='booking-container'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='btn btn-book'
          >
            send message
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default ContactForm
