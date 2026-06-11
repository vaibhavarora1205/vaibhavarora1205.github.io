import React from 'react'

function CreditFooter() {
  return (
    <div className="bg-black text-white text-center py-6 border-t border-gray-800">

      <p className="text-gray-400">
        © 2026 Vaibhav Arora
      </p>

      <div className="flex justify-center gap-6 mt-3 text-sm">

        <a href="https://www.linkedin.com/in/vaibhavarora1205-/" target='_blank' className="hover:text-blue-400">LinkedIn</a>

        <a href="https://github.com/vaibhavarora1205" target='_blank' className="hover:text-gray-300">GitHub</a>

        <a href="mailto:vaibhavarara@gmail.com" className="hover:text-red-400">Email</a>

      </div>

    </div>
  )
}

export default CreditFooter
