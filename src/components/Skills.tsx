'use client';

const skills = [
  'HTML',
  'CSS / Sass',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Redux Toolkit',
  'Zustand',
  'Tailwind CSS',
  'Bootstrap',
  'REST API',
  'Git & GitHub',
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
