interface SkillProps {
  name: string;
  iconPath?: string;
}

const Skill = ({ name, iconPath }: SkillProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-3">
      {iconPath && (
        <img
          src={iconPath}
          alt={`${name} icon`}
          className="w-10 sm:w-20 h-10 sm:h-20 p-3 sm:p-5 bg-mid-white dark:bg-white rounded-full"
        />
      )}
      <span className="text-base">{name}</span>
    </div>
  );
};

export default Skill;
