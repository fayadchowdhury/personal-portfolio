import { useMediaQuery } from "react-responsive";
import { slideIn } from "./Animations";
import { useGSAP } from "@gsap/react";

interface ExperienceDescriptionCardProps {
  iconPath?: string;
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  items?: string[];
  children?: React.ReactNode[];
}

const ExperienceDescriptionCard = ({
  iconPath,
  title,
  subtitle,
  period,
  description,
  items,
  children,
}: ExperienceDescriptionCardProps) => {
  useGSAP(() => {
    slideIn({
      elem: "#experience-card",
      startX: -20,
      endX: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 1,
      stagger: 0.1,
    });
  }, [iconPath, title, subtitle, period, description, items, children]);

  useGSAP(() => {
    slideIn({
      elem: "#experience-card-li",
      startX: -20,
      endX: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 0.8,
      stagger: 0.1,
    });
  }, [iconPath, title, subtitle, period, description, items, children]);

  const isMobileSmall = useMediaQuery({ maxWidth: 770 });
  const isMobileMedium = useMediaQuery({ maxWidth: 1024 });

  return (
    <div
      id="experience-card"
      className="col-span-5 md:col-span-4 grid grid-cols-3 gap-10 p-5 m-5 card"
    >
      <div className="flex items-center justify-center col-span-1">
        {iconPath && <img src={iconPath} alt="Icon" className="w-30 h-30" />}
      </div>
      <div className="flex flex-col justify-center col-span-2">
        <h1 className="experience-card-text-header text-start mt-3 mb-3">
          {title}
        </h1>
        <div className="grid grid-cols-2 py-3">
          {subtitle && (
            <h3 className="experience-card-text-sub-header">{subtitle}</h3>
          )}
          {period && (
            <h3 className="experience-card-text-sub-header text-end">
              {period}
            </h3>
          )}
        </div>
        <p className="experience-card-text-content text-start mb-3 py-3">
          {description}
        </p>
        {!isMobileSmall && !isMobileMedium && items && (
          <ul className="experience-card-ul mb-3">
            {items.map((item, index) => (
              <li id="experience-card-li" key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
};

export default ExperienceDescriptionCard;
