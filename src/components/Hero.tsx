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
  return (
    <section id="hero" className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-md:mt-20 mt-7">
        {/* Left side */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-2">
            {/* Name */}
            {/* <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold max-md:text-center"> */}
            <h1 className="text-header font-extrabold max-md:text-center">
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
                  <img
                    src={tagline.icon}
                    alt={tagline.text}
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 justify-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </header>
        {/* Right side */}
        <div className="w-full flex items-center justify-center">
          {heroImage && (
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="w-auto max-w-xs sm:max-w-sm md:max-w-md"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
