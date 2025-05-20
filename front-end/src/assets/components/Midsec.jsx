import React from 'react'
import Form from './Form'

const midsec = () => {
  return (
    <div>
        <section className="bg-gray-100 py-16 px-4 text-center">
  <h1 className="py-2 text-5xl md:text-5xl font-extrabold text-gray-800 mb-10">
   BROWSE SCHOLARSHIPS <br className="hidden md:block" /> FOR COLLEGE STUDENTS
  </h1>
  <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-lg">
    The nation’s largest, multi-billion dollar scholarship database — create a free account to see all of your personalized matches and start applying today.
  </p>
  <Form />
</section>
    </div>
  )
}

export default midsec