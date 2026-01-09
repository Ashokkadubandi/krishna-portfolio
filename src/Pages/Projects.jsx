import ProjectsData from "../projects-data.json";

const ProjectsSection = () => {
  return (
    <div className="p-8 min-h-screen">
      <h3 className="text-3xl mb-4 text-center pt-3 tracking-wider">Projects</h3>
      <hr className="mb-8 border-blue-300"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ProjectsData.Projects.map((project, index) => (
          <div
            key={index}
            className="bg-blue-700 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-extrabold mb-2">{project.Title}</h3>
            <p className="text-gray-100 mb-4">{project.Description}</p>
            <div className="flex flex-wrap gap-2">
              {project.Technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-blue-100 text-blue-800 hover:bg-blue-500
                   hover:text-white cursor-pointer text-xs px-2 py-1 rounded transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProjectsSection;