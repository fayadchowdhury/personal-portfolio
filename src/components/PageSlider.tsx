import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PageSliderProps {
  onLeftClick: () => void;
  onRightClick: () => void;
  totalPages: number;
  currentPage: number;
}

const PageSlider = ({
  onLeftClick,
  onRightClick,
  totalPages,
  currentPage,
}: PageSliderProps) => {
  return (
    <div className="grid grid-cols-3">
      <div onClick={onLeftClick} className="flex items-center justify-center">
        <ChevronLeftIcon className="w-4 h-4 cursor-pointer" />
      </div>
      <span className="flex items-center justify-center">
        {currentPage + 1} / {totalPages}
      </span>
      <div onClick={onRightClick} className="flex items-center justify-center">
        <ChevronRightIcon className="w-4 h-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default PageSlider;
