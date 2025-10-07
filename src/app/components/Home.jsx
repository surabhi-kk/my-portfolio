import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <section id="home" className="scroll-mt-[12vh] overflow-x-hidden ">
      <div className="flex flex-col-reverse  lg:flex-row items-center justify-between bg-gray-700 px-10 sm:px-15 md:px-20 py-6 min-h-screen">
  
  {/* Left Side - Text Content */}
  <div className="flex-1 flex flex-col justify-center items-start text-left gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-20 md:mt-20 ">
    <span className="text-sm sm:text-xl md:text-lg text-white font-semibold">
  Hello, I am
</span>

<p className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
  Surabhi K K
</p>

<p className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
  I'm a <span className="text-blue-500">Full Stack</span>
</p>

<p className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-500">
  Developer
</p>

<p className='text-xs sm:base md:text-lg text-white'>Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality</p>
    {/* Social Icons */}
    <div className="flex gap-4 py-6">
  <div className="p-2  shadow-md  hover:bg-blue-400 hover:text-black hover:shadow-blue-500  border border-blue-500 rounded-full hover:border-blue-400 transition duration-300">
    <Linkedin className="w-6 h-6 text-blue-500  hover:text-black transition duration-300" />
  </div>

  <div className="p-2  shadow-md  hover:bg-blue-400 hover:text-black hover:shadow-blue-500  border border-blue-500 rounded-full hover:border-blue-400 transition duration-300">
    <Github className="w-6 h-6 text-blue-500 hover:text-black transition duration-300" />
  </div>

  <div className="p-2  shadow-md  hover:bg-blue-400 hover:text-black hover:shadow-blue-500  border border-blue-500 rounded-full hover:border-blue-400 transition duration-300">
    <Mail className="w-6 h-6 text-blue-500 hover:text-black transition duration-300" />
  </div>
</div>
<Link
  href="/Surabhi_K KResume.pdf" 
  download 
  className="
    inline-block 
    border border-blue-500
    bg-blue-500
    shadow-blue-500
    text-black 
    px-6 py-3 
    rounded-full 
    font-semibold 
    shadow-md 
       hover:bg-transparent
 hover:text-white
  hover:shadow-none
  hover:border-blue-400

  "
>
  Download Resume
</Link>

  </div>

  {/* Right Side - Image */}
  <div className="flex-1 flex justify-center items-end  sm:items-center md:items-center py-0 md:py-6  ">
  <img
  src="/images/Surabhipic.jpeg"
  alt="profile picture"


  className=" w-32 h-32 sm:w-52 sm:h-52 md:w-64 md:h-64 w-64 h-64 object-cover rounded-full border-4 border-white animate-[bounce_5s_ease-in-out_infinite] "
/>

</div>

</div>

  </section>
  )
}

export default Home
