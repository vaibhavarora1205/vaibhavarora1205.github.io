import React from 'react'

function CallToAction() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-center mt-4">
      <div className='absolute inset-0 bg-cover bg-center'  style={{backgroundImage: "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')"}}>
    </div>
     <div className="absolute inset-0 bg-black/70"></div>
     <div className="relative z-10 text-white px-6">
        <h2 className="text-lg">Call Us To Day</h2>

        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          99 00 878 789 7890
        </h1>

        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <button className="mt-6 bg-blue-500 px-6 py-2 rounded-full hover:bg-pink-600 transition">
          CALL NOW
        </button>
      </div>
    </div>
    
  )
}

export default CallToAction
