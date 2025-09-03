import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

interface TestimonialCardProps {
  title: string;
  message: string;
  name: string;
  designation?: string;
  imagePath?: string;
  rating?: number;
}

const TestimonialCard = ({
  title,
  message,
  name,
  imagePath,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="flex flex-col p-5 m-5 rounded-lg border-1 border-gray-border-light dark:border-gray-border-dark bg-mid-white dark:bg-mid-black">
      <h2 className="text-sub-header-special">{title}</h2>
      <p>{message}</p>
      <div className="flex grid-cols-2 justify-start items-center gap-2 mt-2">
        <div className="flex flex-col justify-start items-start">
          {imagePath && (
            <img
              src={imagePath}
              alt={`${name}'s picture`}
              className="rounded-full w-15 h-15 border-3 border-gray-border-light dark:border-gray-border-dark object-cover"
            />
          )}
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="">{name}</span>
          {rating && (
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) =>
                index < rating ? (
                  <StarIconSolid
                    key={index}
                    className="h-5 w-5 text-black dark:text-white"
                  />
                ) : (
                  <StarIconOutline
                    key={index}
                    className="h-5 w-5 text-gray-400"
                  />
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
