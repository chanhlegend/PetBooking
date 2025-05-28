import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

function ServicePage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-80">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Service Page</h1>
        <p className="text-lg">This is the content of the service page.</p>
      </div>
      <Footer />
    </div>
  )
}

export default ServicePage
