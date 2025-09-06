import { useGSAP } from "@gsap/react";
import { scrambleText, slideIn } from "../components/Animations";
import HeroModel from "../components/HeroModel";

interface Tagline {
  text: string;
  icon: string;
}

interface HeroImage {
  src: string;
  alt: string;
}

interface HeroProps {
  name: string;
  taglines: Tagline[];
  heroImage?: HeroImage;
}

const Hero = ({ name, taglines, heroImage }: HeroProps) => {
  useGSAP(() => {
    slideIn({
      elem: "#hero",
      startY: -20,
      endY: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 1.2,
      stagger: 0.2,
    });
  });
  useGSAP(() => {
    scrambleText({
      elem: "#name",
      text: name,
      scrambleChars: "0011",
      duration: 5,
      repeat: 0,
    });
  });
  return (
    <section id="hero" className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-25">
        {/* Left side */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-15 px-5">
          <div className="flex flex-col gap-2">
            {/* Name */}
            {/* <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold max-md:text-center"> */}
            <h1
              id="name"
              className="text-header font-extrabold max-md:text-center"
            >
              {name}.
            </h1>
            {/* Taglines */}
            <div className="flex flex-col gap-2 tagline-carousel">
              {taglines.map((tagline, index) => (
                <div
                  key={index}
                  className="flex gap-2 max-md:items-center max-md:justify-center tagline"
                >
                  <p className="text-sub-header max-md:text-center">
                    {tagline.text}
                  </p>
                  {/* <img
                    src={tagline.icon}
                    alt={tagline.text}
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 justify-center"
                  /> */}
                </div>
              ))}
            </div>
          </div>
        </header>
        {/* Right side */}
        <div className="w-full flex items-center justify-center">
          {heroImage ? (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-auto max-w-xs sm:max-w-sm md:max-w-md"
            />
          ) : (
            <HeroModel />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
