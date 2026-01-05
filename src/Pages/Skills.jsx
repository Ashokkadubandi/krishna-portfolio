import { useState } from 'react';
import SkillCard from '../components/SkillCard.jsx';
import data from '../data.json';

console.log(data)

const SkillsSection = () => {
  const [skills,setSkills] = useState(data.skills);
  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

    </div>
  )
}
export default SkillsSection;