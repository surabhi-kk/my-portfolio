import React from 'react'

function Skill() {
  
       const skill=[ 
  { name: "React Native", image: "/icons/react.png" },
  { name: "Next.js", image: "/icons/Next.js.png" },
  { name: "Tailwind CSS", image: "/icons/Tailwind CSS.png" },
  { name: "Java", image: "/icons/Java (2).png" },
  { name: "MySQL", image: "/icons/MySQL.png" },
  { name: "Javascript", image: "/icons/JavaScript.png" },
  { name: "Spring Boot", image: "/icons/Spring.png" },
  { name: "Bootstrap", image: "/icons/Bootstrap (1).png" },
    { name: "Html", image: "/icons/HTML5.png" },
  { name: "CSS", image: "/icons/CSS3.png" },

    ]
  return (
    <section id="skill" className="scroll-mt-[12vh]">
    <div className='bg-gray-700 items-center text-center justify-center py-10 px-10 h-[100vh]'>
      <span className='text-3xl sm:text-3xl md:text-5xl text-bold text-white'>Technical </span>
      <span className='text-3xl sm:text-3xl md:text-5xl text-bold text-blue-500'>Skills</span>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5  gap-y-12 gap-x-2 mt-10 ml-16 mr-4">
  {skill.map((s) => (
    <div
      key={s.name}
      className="w-20 h-20 
        sm:w-40 sm:h-40 
        md:w-44 md:h-44   shadow-white shadow-md flex flex-col items-center justify-center gap-4 sm:gap:4 md:gap-6 py-6 text-white shadow-lg rounded-2xl p-6 text-center hover:bg-blue-500 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={s.image}
        alt={s.name}
        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
      />
      <h2 className="text-sm md:text-xl font-semibold">{s.name}</h2>
    </div>
  ))}
</div>

    </div>

    </section>
  )
}

export default Skill
