import React from 'react'

function MembershipCard({name,price,description}) {
  return (
<div className='w-fit p-5 text-center h-fitcontent text-base/8 rounded-xl shadow-[0px_0px_15px_oklch(93.2%_0.032_255.585)]'>      <h1 className='text-2xl font-black font-mono'>{name}</h1>
      <h1 className='text-xl font-bold'>{price}</h1>
      <hr />
      <h1>{description}</h1>
    </div>
  )
}

export default MembershipCard;
