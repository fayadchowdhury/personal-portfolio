import { useGSAP } from "@gsap/react";
import { slideIn } from "../components/Animations";

interface IntroProps {
  intro: string;
}

const Intro = ({ intro }: IntroProps) => {
  useGSAP(() => {
    slideIn({
      elem: "#intro",
      startY: -20,
      endY: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 1.2,
      stagger: 0.2,
    });
  });
  return (
    <section id="intro" className="">
      <div className="text-center mt-5 w-full py-3 px-3 md:py-10 md:px-10">
        <p className="text-content">{intro}</p>
      </div>
    </section>
  );
};

export default Intro;
