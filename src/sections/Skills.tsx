import Skill from "../components/SkillBadge";

interface SkillsProps {
  skills: {
    type: string;
    skills: {
      name: string;
      iconPath: string;
    }[];
  }[];
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="flex flex-col items-center justify-start">
      {skills && skills.length > 0 && (
        <div
          className={`grid grid-cols-${
            skills.length > 1 ? 2 : 1
          } lg:grid-cols-${
            skills.length > 3 ? 3 : skills.length
          } max-sm:grid-cols-1`}
        >
          {skills.map((elem) => (
            <div key={elem.type} className="flex flex-col">
              <h1 className="text-sub-header mb-2 text-center">{elem.type}</h1>
              <div className="grid grid-cols-3 items-center justify-center">
                {elem.skills.map((skill) => (
                  <Skill
                    key={skill.name}
                    name={skill.name}
                    iconPath={skill.iconPath}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
