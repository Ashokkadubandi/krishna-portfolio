import ProjectsCard from "../components/ProjectsCard";
import ProjectsData from "../projects-data.json";

const ProjectsSection = () => {
  return (
    <div className="p-8 min-h-screen">
      <h3 className="text-3xl mb-4 text-center pt-3 tracking-wider">Projects</h3>
      <hr className="mb-8 border-blue-300"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProjectsData.Projects.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}
export default ProjectsSection;