import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <section id="home" className="scroll-mt-[12vh]">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-gray-700 px-20 py-6 min-h-screen">
  
  {/* Left Side - Text Content */}
  <div className="flex-1 flex flex-col justify-center items-start text-left gap-4 mt-20 ">
    <span className="text-sm sm:text-2xl text-white text-bold">
      Hello, I am
    </span>

    <p className="text-2xl sm:text-5xl font-bold text-white">
      Surabhi K K
    </p>

    <span className="text-2xl sm:text-5xl font-bold text-white">
      I'm a
    </span>
    
    <span className="text-2xl sm:text-5xl font-bold text-blue-500">
      Full Stack Developer
    </span>
<p className='text-white'>Building Bridges Between Front-End and Back-End, Transforming Ideas into Web Reality</p>
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
  href="/week1.pdf" 
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
  <div className="flex-1 flex justify-center items-center py-6">
  <img
  src="/images/Surabhipic.jpeg"
  alt="profile picture"
  
  className="w-64 h-64 object-cover rounded-full border-4 border-white animate-[bounce_5s_ease-in-out_infinite]"
/>

</div>

</div>

  </section>
  )
}

export default Home
