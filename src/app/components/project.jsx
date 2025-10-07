import React from 'react'

function Project() {
  const project = [
    {
      name: "Car rental",
      description:
        "Car rental system is used to rent a car. Technologies: Java, MySQL, Spring Boot.",
      image: "/images/Blue Illustrative Retro Fast Car Logo.jpg",
    },
    {
      name: "Crud app",
      description: "A simple CRUD application using React,Nextjs and Node.js.",
      image: "/images/Crudapp.jpg",
    },
    {
      name: "Ecommerce ui",
      description: "UI design for an ecommerce platform using React and Tailwind.",
      image: "/images/ecommerce ui.jpg",
    },
    {
      name: "Event management",
      description: "i build nextjs base event management that connect to an external Api.I handled all the CRUD operation from the frontend.",
      image: "/images/Event.jpg",
    },
  ];

  return (
    <section id="project" className="scroll-mt-[12vh]">
      <div className="bg-gray-700 items-center text-center justify-center py-10 px-10 min-h-screen">
        <span className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">My </span>
        <span className="text-3xl sm:text-3xl md:text-5xl font-bold text-blue-500">Project</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mx-auto max-w-6xl">
          {project.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden bg-gray-800 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-48 object-cover"
              />

              {/* Overlay: Name and Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 px-4 py-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out text-white">
                <h2 className="text-lg font-bold">{s.name}</h2>
                <p className="text-sm mt-2">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
