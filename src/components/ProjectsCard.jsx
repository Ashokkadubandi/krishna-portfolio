import ProjectsData from "../projects-data.json";

const ProjectsCard = ({ project }) => {
  return (
    <div className="bg-blue-100 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl text-black font-bold mb-2">{project.Title}</h3>
      <p className="text-gray-800 mb-4">{project.Description}</p>
        <div className="flex flex-wrap gap-2">
            {project.Technologies.map((tech, techIndex) => (
                <span key={techIndex} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                </span>
            ))}
        </div>
    </div>
  );
}

export default ProjectsCard;