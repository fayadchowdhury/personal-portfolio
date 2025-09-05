import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { slideIn } from "./Animations";

interface ProjectDescriptionCardProps {
  picPath?: string;
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  items?: string[];
  featured?: boolean;
  children?: React.ReactNode[];
}

const ProjectDescriptionCard = ({
  picPath,
  title,
  subtitle,
  period,
  description,
  items,
  featured,
  children,
}: ProjectDescriptionCardProps) => {
  useGSAP(() => {
    slideIn({
      elem: "#project-card",
      startX: -20,
      endX: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 1.2,
      stagger: 0.2,
    });
  });

  useGSAP(() => {
    slideIn({
      elem: "#project-card-li",
      startX: -20,
      endX: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 1.2,
      stagger: 0.2,
    });
  });

  const isMobileSmall = useMediaQuery({ maxWidth: 770 });
  const isMobileMedium = useMediaQuery({ maxWidth: 1024 });
  return (
    <div id="project-card" className="flex flex-col gap-2 pb-5 m-5 card">
      <div
        className={`${
          featured ? "h-150 " : "h-40 "
        } w-full overflow-hidden rounded-t-lg`}
      >
        {picPath && (
          <img
            src={picPath}
            alt="Icon"
            className="w-full h-full object-cover object-top"
          />
        )}
      </div>
      <div className="flex flex-col justify-center p-5">
        <h1
          className={`${
            featured
              ? "project-card-featured-text-header"
              : "project-card-text-header"
          } text-start mt-3 mb-3`}
        >
          {title}
        </h1>
        <div
          className={`grid grid-cols-2 ${
            featured
              ? "project-card-featured-text-sub-header"
              : "project-card-text-sub-header"
          } py-3`}
        >
          {subtitle && <h3>{subtitle}</h3>}
          {period && (
            <h3
              className={`${
                featured
                  ? "project-card-featured-text-sub-header"
                  : "project-card-text-sub-header"
              } text-end`}
            >
              {period}
            </h3>
          )}
        </div>
        <p
          className={`${
            featured
              ? "project-card-featured-text-content"
              : "project-card-text-content"
          } text-start mb-3 py-3`}
        >
          {description}
        </p>
        {!isMobileSmall && !isMobileMedium && items && featured && (
          <ul className="project-card-ul mb-3">
            {items.map((item, index) => (
              <li id="project-card-li" key={index}>
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

export default ProjectDescriptionCard;
