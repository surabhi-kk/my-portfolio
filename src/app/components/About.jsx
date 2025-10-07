import React from 'react'

function About() {
  return (
    <section id="about" className="scroll-mt-[12vh]">
    <div className="bg-gray-600 h-[100vh] flex flex-col items-center justify-center px-5 text-center">
  <div>
    <span className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">About </span>
    <span className="text-3xl sm:text-3xl md:text-5xl font-bold text-blue-500">me</span>
    <p className="text-xl text-white py-6 max-w-4xl">
      I am a Full Stack Developer skilled in <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>MySQL</strong>, and <strong>React</strong>.<br />
      I enjoy building scalable backend systems and responsive frontends that deliver seamless user experiences.
    </p>
  </div>
</div>
</section>
  )
}

export default About
