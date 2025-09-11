import { useEffect, useState } from "react";
import { readmeToHtml } from "../utils";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import IconAnchor from "./IconAnchor";

interface ProjectModalProps {
  picPath?: string;
  title?: string;
  period?: string;
  url?: string;
  readme?: string;
}

const ProjectModal = ({ picPath, title, url, readme }: ProjectModalProps) => {
  const [readmeText, setReadmeText] = useState<string>("");
  useEffect(() => {
    if (!readme) return;

    const currReadmeText = readmeToHtml(readme ?? "");
    setReadmeText(currReadmeText);
  }, [readme]);
  return (
    <div className="modal">
      {picPath && <img className="mb-2" src={picPath} />}
      <h1 className="project-modal-text-header">{title}</h1>
      <div className="flex items-center max-md:justify-items-center my-2">
        <IconAnchor
          buttonText="Check this out on Github!"
          href={url}
          Icon={ArrowRightIcon}
        />
      </div>
      <div
        className="project-modal-text-content"
        dangerouslySetInnerHTML={{ __html: readmeText }}
      />
    </div>
  );
};

export default ProjectModal;
