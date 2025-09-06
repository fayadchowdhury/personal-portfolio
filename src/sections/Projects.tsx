import { useGSAP } from "@gsap/react";
import PageSlider from "../components/PageSlider";
import ProjectDescriptionCard from "../components/ProjectDescriptionCard";
import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { slideIn } from "../components/Animations";

interface ProjectsProps {
  projects: {
    picPath: string;
    title: string;
    subtitle: string;
    period: string;
    description: string;
    items: string[];
    featured?: boolean;
  }[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const featuredContainerRef = useRef<HTMLDivElement>(null);
  const unfeaturedContainerRef = useRef<HTMLDivElement>(null);

  const featuredProjects = projects.filter((project) => project.featured);

  const featuredProjectsPerPage = 1;
  const featuredProjectsPages = Math.ceil(
    featuredProjects.length / featuredProjectsPerPage
  );
  const [currentFeaturedProjectsPage, setCurrentFeaturedProjectsPage] =
    useState(0);

  const featuredProjectsFocus = featuredProjects.slice(
    currentFeaturedProjectsPage * featuredProjectsPerPage,
    currentFeaturedProjectsPage * featuredProjectsPerPage +
      featuredProjectsPerPage
  );

  const unfeaturedProjects = projects.filter((project) => !project.featured);

  const isMobileSmall = useMediaQuery({ maxWidth: 770 });
  const isMobileMedium = useMediaQuery({ maxWidth: 1024 });

  const unfeaturedProjectsPerPage = isMobileSmall ? 1 : isMobileMedium ? 2 : 4;

  const unfeaturedProjectsPages = Math.ceil(
    unfeaturedProjects.length / unfeaturedProjectsPerPage
  );
  const [currentUnfeaturedProjectsPage, setCurrentUnfeaturedProjectsPage] =
    useState(0);

  const unfeaturedProjectsFocus = unfeaturedProjects.slice(
    currentUnfeaturedProjectsPage * unfeaturedProjectsPerPage,
    currentUnfeaturedProjectsPage * unfeaturedProjectsPerPage +
      unfeaturedProjectsPerPage
  );

  let unfeaturedProjectsLeftCol = null;
  let unfeaturedProjectsRightCol = null;

  if (unfeaturedProjectsFocus.length <= 2) {
    // All in left column
    unfeaturedProjectsLeftCol = unfeaturedProjectsFocus.slice(
      0,
      unfeaturedProjectsFocus.length
    );
  } else {
    // Split into two columns
    unfeaturedProjectsLeftCol = unfeaturedProjectsFocus.slice(0, 2);
    unfeaturedProjectsRightCol = unfeaturedProjectsFocus.slice(
      2,
      unfeaturedProjectsFocus.length
    );
  }

  // Animate featured when page changes
  useGSAP(() => {
    if (featuredContainerRef.current) {
      slideIn({
        elem: featuredContainerRef.current.querySelectorAll("#project-card"),
        startY: 40,
        endY: 0,
        startOpacity: 0,
        endOpacity: 1,
        duration: 0.6,
        stagger: 0.15,
      });
    }
  }, [currentFeaturedProjectsPage]);

  // Animate unfeatured when page changes
  useGSAP(() => {
    if (unfeaturedContainerRef.current) {
      slideIn({
        elem: unfeaturedContainerRef.current.querySelectorAll("#project-card"),
        startY: 40,
        endY: 0,
        startOpacity: 0,
        endOpacity: 1,
        duration: 0.6,
        stagger: 0.15,
      });
    }
  }, [currentUnfeaturedProjectsPage]);

  return (
    <section>
      <div className="lg:grid lg:grid-cols-5 flex flex-col">
        <div className="lg:col-span-3 flex flex-col justify-between h-full">
          <div id="featured-projects" ref={featuredContainerRef}>
            {featuredProjectsFocus &&
              featuredProjectsFocus.map((project, index) => (
                <ProjectDescriptionCard key={index} {...project} />
              ))}
          </div>
          <div className="lg:col-span-3 flex flex-col items-center justify-center">
            <PageSlider
              onLeftClick={() => {
                setCurrentFeaturedProjectsPage(
                  (currentFeaturedProjectsPage - 1 + featuredProjectsPages) %
                    featuredProjectsPages
                );
              }}
              onRightClick={() => {
                setCurrentFeaturedProjectsPage(
                  (currentFeaturedProjectsPage + 1) % featuredProjectsPages
                );
              }}
              totalPages={featuredProjectsPages}
              currentPage={currentFeaturedProjectsPage}
            />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-col justify-between h-full">
          <div
            ref={unfeaturedContainerRef}
            className="lg:grid lg:grid-cols-2 flex flex-row items-center justify-center"
          >
            <div
              id="unfeatured-projects"
              className="md:grid md:grid-cols-2 flex flex-col lg:hidden"
            >
              {unfeaturedProjectsFocus &&
                unfeaturedProjectsFocus.map((project, index) => (
                  <ProjectDescriptionCard key={index} {...project} />
                ))}
            </div>
            <div
              id="unfeatured-projects"
              className="lg:col-span-1 lg:flex lg:flex-col hidden"
            >
              {unfeaturedProjectsLeftCol &&
                unfeaturedProjectsLeftCol.map((project, index) => (
                  <ProjectDescriptionCard key={index} {...project} />
                ))}
            </div>
            <div
              id="unfeatured-projects"
              className="lg:col-span-1 lg:flex lg:flex-col hidden"
            >
              {unfeaturedProjectsRightCol &&
                unfeaturedProjectsRightCol.map((project, index) => (
                  <ProjectDescriptionCard key={index} {...project} />
                ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <PageSlider
              onLeftClick={() => {
                setCurrentUnfeaturedProjectsPage(
                  (currentUnfeaturedProjectsPage -
                    1 +
                    unfeaturedProjectsPages) %
                    unfeaturedProjectsPages
                );
              }}
              onRightClick={() => {
                setCurrentUnfeaturedProjectsPage(
                  (currentUnfeaturedProjectsPage + 1) % unfeaturedProjectsPages
                );
              }}
              totalPages={unfeaturedProjectsPages}
              currentPage={currentUnfeaturedProjectsPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
