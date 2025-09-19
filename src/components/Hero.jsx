import React from 'react'
import { MapPin, Calendar, Clock, Search } from 'lucide-react'

const Hero = () => {
  return (
    <section className='bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:py-28 py-16 text-center'>
      <h1 className='text-4xl sm:text-5xl font-bold mb-4'>Find Your Perfect <span className='text-yellow-400'>Rental Car</span></h1>
      <p className='text-lg sm:text-xl mb-12 text-gray-200'>Discover amazing deals on quality vehicles. Book now and drive away with confidence</p>

      <div className='bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-4 items-end text-black'>
        {/* Pickup Location */}
        <div>
          <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'><MapPin className='w-5 h-5'/>Pickup Location</label>
          <select className='w-full p-2 border-gray-300 rounded cursor-pointer'>
            <option disabled>Select city</option>
            <option value="">Colombo</option>
            <option value="">Kandy</option>
            <option value="">Galle</option>
            <option value="">Jaffna</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default Hero