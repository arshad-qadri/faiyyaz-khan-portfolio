import React from "react";

const projects = [
  { id: 1, src: "./src/assets/3.png", alt: "POP Ceiling Design 1", description: "Elegant and modern false ceiling designs to enhance your living space." },
  { id: 2, src: "./src/assets/2.jpg", alt: "POP Ceiling Design 2", description: "Stylish and intricate ceiling patterns for a sophisticated look." },
  { id: 3, src: "./src/assets/1.jpg", alt: "POP Ceiling Design 3", description: "Classic and artistic POP ceiling work to add charm to any room." },
];

const pvcProjects = [
  { id: 4, src: "./src/assets/pvc1.jpg", alt: "PVC Ceiling Design 1", description: "Durable and stylish PVC ceiling designs for modern interiors." },
  { id: 5, src: "./src/assets/pvc2.jpg", alt: "PVC Ceiling Design 2", description: "Waterproof and low-maintenance PVC ceilings with elegant patterns." },
  { id: 6, src: "./src/assets/pvc3.jpg", alt: "PVC Ceiling Design 3", description: "Innovative and decorative PVC ceiling solutions for any space." },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5 font-sans">
      <header className="text-center py-8 bg-blue-600 text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold">Ceiling Work Portfolio</h1>
        <p className="text-lg">Transforming spaces with creative ceiling designs for over 10 years</p>
      </header>

      {/* POP Ceiling Work Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mt-6">POP Ceiling Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{project.alt}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PVC Ceiling Work Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mt-6">PVC Ceiling Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {pvcProjects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-3">{project.alt}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="text-center py-6 bg-gray-200 rounded-lg mt-6 shadow-md">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <p className="text-gray-700">📞 8600401704</p>
        <p className="text-gray-700">📧 faiyyazkhan675@gmail.com</p>
      </footer>
    </div>
  );
};

export default Portfolio;
