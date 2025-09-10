import { useEffect, useState } from "react";
import { readmeToHtml } from "../utils";

interface ProjectModalProps {
  picPath?: string;
  title?: string;
  period?: string;
  url?: string;
  readme?: string;
}

const ProjectModal = ({
  picPath,
  title,
  period,
  url,
  readme,
}: ProjectModalProps) => {
  const [readmeText, setReadmeText] = useState<string>("");
  useEffect(() => {
    if (!readme) return;

    const currReadmeText = readmeToHtml(readme ?? "");
    setReadmeText(currReadmeText);
  }, [readme]);
  return (
    <div className="flex flex-col gap-2 p-10 w-[90vw] h-[90vh] overflow-auto">
      {picPath && <img className="mb-2" src={picPath} />}
      <a href={url}>
        <h1 className="project-modal-text-header">{title}</h1>
      </a>
      {/* <h2 className="project-modal-text-sub-header">{period}</h2> */}
      <div
        className="project-modal-text-content"
        dangerouslySetInnerHTML={{ __html: readmeText }}
      />
    </div>
  );
};

export default ProjectModal;
