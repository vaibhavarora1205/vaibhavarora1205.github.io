import React from 'react'

function Footer() {
  return (
    <div className='bg-zinc-900 px-6 md-px-16 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='border-r-2'>
          <h2 className="font-bold text-lg mb-4 ">Contact Info</h2>
          <p>2nd Floor, Sunrise PlazaNear City Mall, MG Road Indiranagar, Bengaluru </p>
          <p className="mt-2 text-red-400">Phone: 99 00 878 789 7890</p>
          <p className="text-gray-400">Email: workoutinfo@gym.com</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Working Hours</h2>
          <p>Monday - Friday: 9:00 - 22:00</p>
          <p>Saturday: 9:00 - 21:00</p>
          <p>Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
