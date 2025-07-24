import { ElementType } from "react";

interface IconButtonProps {
  buttonText: string;
  Icon?: ElementType;
  onButtonClick: () => void;
}

const IconButton = ({ buttonText, Icon, onButtonClick }: IconButtonProps) => {
  return (
    <button
      className="flex grid-cols-2 py-2 px-4 rounded-lg gap-2 border-1 border-black dark:border-white hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black"
      onClick={onButtonClick}
    >
      <span className="text-content">{buttonText}</span>
      {Icon && (
        <div className="flex items-center justify-center">
          <Icon className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
        </div>
      )}
    </button>
  );
};

export default IconButton;
