interface SkillProps {
  name: string;
  iconPath?: string;
}

const Skill = ({ name, iconPath }: SkillProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-3">
      {iconPath && (
        <img src={iconPath} alt={`${name} icon`} className="skill-badge-icon" />
      )}
      <span className="skill-badge-text">{name}</span>
    </div>
  );
};

export default Skill;
