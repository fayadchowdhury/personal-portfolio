interface SkillProps {
  name: string;
  iconPath?: string;
}

const Skill = ({ name, iconPath }: SkillProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-3">
      {iconPath && (
        <div className="skill-badge-icon">
          <img src={iconPath} alt={`${name} icon`} />
        </div>
      )}
      <span className="skill-badge-text">{name}</span>
    </div>
  );
};

export default Skill;
