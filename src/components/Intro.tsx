interface IntroProps {
  intro: string;
}

const Intro = ({ intro }: IntroProps) => {
  return (
    <section id="intro" className="">
      <div className="text-center mt-5 w-full py-3 px-3 md:py-10 md:px-10">
        <p className="text-content">{intro}</p>
      </div>
    </section>
  );
};

export default Intro;
