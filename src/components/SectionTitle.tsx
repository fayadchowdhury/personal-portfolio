import { useGSAP } from "@gsap/react";
import { slideIn } from "./Animations";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  useGSAP(() => {
    slideIn({
      elem: "#section-title",
      startX: -20,
      endX: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 1,
      stagger: 0.1,
    });
  });
  return (
    <div
      id="section-title"
      className="flex items-center justify-center mt-10 mb-5"
    >
      <div className="section-title">{title}</div>
    </div>
  );
};

export default SectionTitle;
