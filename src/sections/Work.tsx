import ExperienceDescriptionCard from "../components/ExperienceDescriptionCard";

interface WorkProps {
  workItems: {
    iconPath: string;
    title: string;
    subtitle: string;
    period: string;
    description: string;
    items: string[];
  }[];
}

const Work = ({ workItems }: WorkProps) => {
  return (
    <section id="work">
      {/* <div className="grid grid-cols-1 md:grid-cols-5"> */}
      {workItems.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-1 hidden md:block"></div>
          <ExperienceDescriptionCard {...item} />
        </div>
      ))}
    </section>
  );
};

export default Work;
