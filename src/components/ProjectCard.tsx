type Project = {
    title: string
    description: string
    image: string
    tech: string[]
    link: string
  }
  
  export default function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-lg transition">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-600 text-sm my-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => (
              <span key={t} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline text-sm"
          >
            View Project →
          </a>
        </div>
      </div>
    )
  }
  