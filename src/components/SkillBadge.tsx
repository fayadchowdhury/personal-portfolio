import { useGSAP } from "@gsap/react";
import { slideIn } from "./Animations";

interface SkillProps {
  name: string;
  iconPath?: string;
}

const Skill = ({ name, iconPath }: SkillProps) => {
  useGSAP(() => {
    slideIn({
      elem: "#skill-badge",
      startX: -20,
      endX: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 0.5,
      stagger: 0.05,
    });
  });
  return (
    <div
      id="skill-badge"
      className="flex flex-col items-center justify-center p-3"
    >
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
