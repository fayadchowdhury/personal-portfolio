import ExperienceDescriptionCard from "../components/ExperienceDescriptionCard";

interface WorkProps {
  workItems: {
    order: number;
    iconPath: string;
    title: string;
    subtitle: string;
    period: string;
    description: string;
    items: string[];
  }[];
}

const Work = ({ workItems }: WorkProps) => {
  console.log(workItems);
  return (
    <section id="work">
      {/* <div className="grid grid-cols-1 md:grid-cols-5"> */}
      {workItems
        .sort((a, b) => a.order - b.order)
        .map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-1 hidden md:block"></div>
            <ExperienceDescriptionCard {...item} />
          </div>
        ))}
    </section>
  );
};

export default Work;
