'use client';

const projects = [
  {
    title: 'Giphy API',
    img: '/giphy-api.png',
    url: 'https://neobis-front-giphy-api-nine.vercel.app',
    label: 'View Code',
  },
  {
    title: 'Cinema Catalog',
    img: '/cinema.png',
    url: 'https://neobis-front-cinema.vercel.app',
    label: 'View Code',
  },
  {
    title: 'Todo List',
    img: '/todo.png',
    url: 'https://rizban23.github.io/neobis-front-todoList/',
    label: 'View Demo',
  },
];

export default function Projects() {
  return (
    <section id="portfolio" className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <a
                href={project.url}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                {project.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
