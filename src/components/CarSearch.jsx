import React from 'react'
import { MapPin, Calendar, Clock, Search } from 'lucide-react'

const CarSearch = () => {
  return (
    <section className='bg-gradient-to-br from-blue-500 to-blue-700 text-white sm:py-28 py-16 text-center'>
      <h1 className='text-4xl sm:text-5xl font-bold mb-4'>Find Your Perfect <span className='text-yellow-400'>Rental Car</span></h1>
      <p className='text-lg sm:text-xl mb-12 text-gray-200'>Discover amazing deals on quality vehicles. Book now and drive away with confidence</p>

      <div className='bg-white rounded-xl shadow-lg p-4 sm:p-5 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-6 gap-5 items-end text-black'>
        {/* Pickup Location */}
        <div>
          <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'><MapPin className='w-5 h-5' />Pickup Location</label>
          <select className='w-full p-2 border-gray-300 rounded cursor-pointer'>
            <option disabled>Select city</option>
            <option value="">Colombo</option>
            <option value="">Kandy</option>
            <option value="">Galle</option>
            <option value="">Jaffna</option>
          </select>
        </div>

        {/* Pickup Date */}
        <div>
          <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
            <Calendar className='w-5 h-5' /><span>Pickup Date</span>
          </label>

          <input type='date' className='w-full p-2 border border-gray-300 rounded cursor-pointer' />
        </div>

        {/* Pickup Time */}
        <div>
          <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
            <Clock className='w-5 h-5' /><span>Pickup Time</span>
          </label>

          <input type='time' className='w-full p-2 border border-gray-300 rounded cursor-pointer' />
        </div>

        {/* Return Date */}
        <div>
          <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
            <Calendar className='w-5 h-5' /><span>Return Date</span>
          </label>

          <input type='date' className='w-full p-2 border border-gray-300 rounded cursor-pointer' min="6:00" max="20:00" />
        </div>

        {/* Return Time */}
        <div>
          <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
            <Clock className='w-5 h-5' /><span>Return Time</span>
          </label>

          <input type='time' className='w-full p-2 border border-gray-300 rounded cursor-pointer' min="6:00" max="20:00" />
        </div>

        <div>
          <button className='flex items-center justify-center gap-2 w-full cursor-pointer bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300'>
            <Search className='w-5 h-5' /><span>Search Cars</span>
          </button>
        </div>

      </div>

      {/* Stats */}
      <div className='mt-16 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-white'>

        <div>
          <h2 className='sm:text-4xl text-3xl font-bold'>500+</h2>
          <p className='sm:text-lg text-gray-200'>Premium Cars</p>
        </div>

        <div>
          <h2 className='sm:text-4xl text-3xl font-bold'>50+</h2>
          <p className='sm:text-lg text-gray-200'>Locations</p>
        </div>

        <div>
          <h2 className='sm:text-4xl text-3xl font-bold'>24/7</h2>
          <p className='sm:text-lg text-gray-200'>Support</p>
        </div>

        <div>
          <h2 className='sm:text-4xl text-3xl font-bold'>100%</h2>
          <p className='sm:text-lg text-gray-200'>Satisfaction</p>
        </div>

      </div>
    </section>
  )
}

export default CarSearch