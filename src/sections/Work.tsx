import DescriptionCard from "../components/DescriptionCard";

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
      {workItems.map((item, _) => (
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-1 hidden md:block"></div>
          <DescriptionCard
            iconPath={item.iconPath}
            title={item.title}
            subtitle={item.subtitle}
            period={item.period}
            description={item.description}
            items={item.items}
          />
        </div>
      ))}
      {/* </div> */}
    </section>
  );
};

export default Work;
