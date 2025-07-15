import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function ProjectsPage() {
  return (
    <div className="px-6 py-16 bg-white max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
