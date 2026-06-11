import React from 'react'
import ExerciseCard from './ExerciseCard'
function ExpercideSection() {
      const data = [
    { title: "Treadmill", img: "https://images.pexels.com/photos/11175793/pexels-photo-11175793.jpeg" },
    { title: "Stretching", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6zIenef0mXjtDEXQA9lC0hk2MCeUDs1ycg&s" },
    { title: "Yoga", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7kXG7N0zsCORNsd2tFr9Op0AAb1Rqb-EZQ&s" },
    { title: "Running", img: "https://img.redbull.com/images/c_crop,x_1185,y_0,h_2560,w_1920/c_fill,w_450,h_600/q_auto,f_auto/redbullcom/2025/11/24/uvjlg4rleh8aagwszmc0/ryan-sandes-trail-running-george-south-africa-coast-2023" },
    { title: "Lifting", img: "https://images.pexels.com/photos/4720783/pexels-photo-4720783.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4720783.jpg&fm=jpg" },
    { title: "PushUp", img: "https://images.pexels.com/photos/14623628/pexels-photo-14623628.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  ];

  return (
    <div>
      <section className="bg-black text-white px-6 md:px-16 py-20">
        <h1 className="text-3xl font-bold mb-12">
        Popular Exercises
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <ExerciseCard key={index} {...item} />
        ))}
      </div>
      </section>
    </div>
  )
}

export default ExpercideSection
