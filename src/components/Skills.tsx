const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Vue.js', 'Nuxt.js', 'Node.js', 'Express', 'PHP', 'Laravel',
    'CodeIgniter', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'WordPress',
    'Strapi', 'Sanity', 'Photoshop'
  ]
  
  export default function Skills() {
    return (
      <section className="bg-blue-50 px-6 py-12 text-center py-5 max-w-7xl mx-auto ">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white border border-blue-300 text-blue-700 px-4 py-2 rounded-full text-sm shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }
  