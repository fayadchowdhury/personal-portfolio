interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center mt-10 mb-5">
      <div className="section-title">{title}</div>
    </div>
  );
};

export default SectionTitle;
