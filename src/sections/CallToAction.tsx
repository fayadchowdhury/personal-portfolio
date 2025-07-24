import IconButton from "../components/IconButton";
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
          <IconButton
            buttonText="GET IN TOUCH"
            Icon={EnvelopeIcon} // Replace with an actual icon component if needed
            onButtonClick={() => {
              console.log("Contact Me button clicked");
            }}
          />
        </div>
        <div className="flex grid-cols-3 gap-10 max-sm:gap-3 w-full py-3 px-3 md:py-10 md:px-10 items-center justify-center">
          <IconButton
            buttonText="EXPERIENCE"
            Icon={BriefcaseIcon} // Replace with an actual icon component if needed
            onButtonClick={() => {
              console.log("Experience button clicked");
            }}
          />
          <IconButton
            buttonText="PROJECTS"
            Icon={BeakerIcon} // Replace with an actual icon component if needed
            onButtonClick={() => {
              console.log("Projects button clicked");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
