import { useEffect, useState } from "react";
import { readmeToHtml } from "../utils";

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
      <a href={url}>
        <h1 className="project-modal-text-header">{title}</h1>
      </a>
      <div
        className="project-modal-text-content"
        dangerouslySetInnerHTML={{ __html: readmeText }}
      />
    </div>
  );
};

export default ProjectModal;
