import { smoothScroll } from "../components/Animations";
import IconAnchor from "../components/IconAnchor";
import {
  BeakerIcon,
  EnvelopeIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline"; // Adjust the import path as necessary

const CallToAction = () => {
  return (
    <section id="call-to-action">
      {/* <div className="flex flex-col items-center justify-center"> */}
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10 max-sm:mb-15">
          <IconAnchor
            buttonText="GET IN TOUCH"
            Icon={EnvelopeIcon} // Replace with an actual icon component if needed
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll({
                // scrollContainer: window,
                targetY:
                  (window.document
                    .getElementById("contact")
                    ?.getBoundingClientRect().top ?? 0) + window.scrollY,
                offsetY: 0.3 * window.innerHeight,
                duration: 1.2,
              });
            }}
          />
        </div>
        <div className="flex grid-cols-3 gap-10 max-sm:gap-3 w-full py-3 px-3 md:py-10 md:px-10 items-center justify-center">
          <IconAnchor
            buttonText="EXPERIENCE"
            Icon={BriefcaseIcon} // Replace with an actual icon component if needed
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll({
                // scrollContainer: window,
                targetY:
                  (window.document
                    .getElementById("work")
                    ?.getBoundingClientRect().top ?? 0) + window.scrollY,
                offsetY: 0.3 * window.innerHeight,
                duration: 1.2,
              });
            }}
          />
          <IconAnchor
            buttonText="PROJECTS"
            Icon={BeakerIcon} // Replace with an actual icon component if needed
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll({
                // scrollContainer: window,
                targetY:
                  (window.document
                    .getElementById("projects")
                    ?.getBoundingClientRect().top ?? 0) + window.scrollY,
                offsetY: 0.3 * window.innerHeight,
                duration: 1.2,
              });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
