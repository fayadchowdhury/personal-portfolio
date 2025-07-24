interface DescriptionCardProps {
  iconPath?: string;
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  items?: string[];
  children?: React.ReactNode[];
}

const DescriptionCard = ({
  iconPath,
  title,
  subtitle,
  period,
  description,
  items,
  children,
}: DescriptionCardProps) => {
  return (
    <div className="col-span-5 md:col-span-4 grid grid-cols-3 gap-2 p-5 m-5 rounded-lg border-1 border-gray-300 dark:border-gray-800 bg-mid-white dark:bg-mid-black">
      <div className="flex items-center justify-center col-span-1">
        {iconPath && <img src={iconPath} alt="Icon" className="w-30 h-30" />}
      </div>
      <div className="flex flex-col justify-center col-span-2">
        <h1 className="text-sub-header font-semibold text-start mt-3 mb-3">
          {title}
        </h1>
        <div className="grid grid-cols-2 text-content py-3">
          {subtitle && <h3>{subtitle}</h3>}
          {period && <h3 className="text-end">{period}</h3>}
        </div>
        <p className="text-start mb-3 py-3">{description}</p>
        {items && (
          <ul className="list-disc list-inside mb-3">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </div>
  );
};

export default DescriptionCard;
