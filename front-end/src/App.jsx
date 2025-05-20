import React from 'react'
import Navbar from './assets/components/Navbar'
import Midsec from './assets/components/Midsec'
import Scholarship from './assets/components/Scholarship'
import Footer from './assets/components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Midsec />
      <main className="flex-grow">
        <Scholarship />
      </main>
      <Footer />
    </div>
  )
}

export default App