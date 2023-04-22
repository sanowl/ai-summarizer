import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-col">
        <img src={logo} alt="sum-logo" className="w-28 object-contain" />
        <button></button>
      </nav>
      <h1 className='head_text'> Summarize your article with <br className='max-md:hidden'/>
        <span className="purple_gradient text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          Artificial intelligence
        </span>
      </h1>
      <h2 className='desc text-center mt-6 text-gray-600 leading-relaxed'>
  Simplify your reading with the power of Artificial Intelligence. Our tool quickly summarizes long articles, so you can save time and focus on what's important.
</h2>


      
    </header>
  )
}

export default Hero

