interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center mt-10 mb-5">
      <div className="dark:bg-mid-white bg-mid-black dark:text-black text-white border dark:border-gray-border-dark border-gray-border-light text-center rounded-4xl px-8 py-4 text-content">
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;
