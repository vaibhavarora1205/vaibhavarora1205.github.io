import React from 'react'
import MembershipCard from './MembershipCard'
function MembershipSection() {
    const plans=[
      {name:'Pass: Start', price: '$10', description: <p>Trainer will Introduce to GYM <br />Access to gym from 8AM to 6PM</p>},
      {name:'Pass: Free time', price: '$15', description: <p>Trainer will Introduce to GYM <br />Access to gym from 8AM to 6PM <br />Access to all clubs </p>},
      {name:'Pass: Trial', price: '$0', description: <p>Trainer will Introduce to GYM <br />Access to gym from 8AM to 6PM <br /> A group class monthly</p>},
    ]
  return (
    <div>
      <h1 className='font-mono text-center text-3xl mb-8 '>GYM Membership</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center'>
        {plans.map((item,index)=>(
            <MembershipCard key={index}{...item}/>    
        ))}
      </div>
    </div>
  )
}

export default MembershipSection
