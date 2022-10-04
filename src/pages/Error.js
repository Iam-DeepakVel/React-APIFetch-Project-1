import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page'>
      <div className="error-container">
        <h1>Oops ! Page Doesn't Exists</h1>
        <Link to="/" className='btn-primary'>
          Back to Home Page
        </Link>
      </div>
    </section>
  )
}

export default Error
