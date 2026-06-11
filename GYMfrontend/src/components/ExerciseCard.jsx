import React from 'react'

function ExerciseCard({img,title}) {
  return (
    <div className='relative rounded-lg overflow-hidden group cursor-pointer'>
      <img src={img} className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"/>
      <div className="absolute inset-0 from-black/80 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  )
}

export default ExerciseCard
