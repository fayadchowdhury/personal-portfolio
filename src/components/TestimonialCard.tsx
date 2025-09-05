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
  designation,
  imagePath,
  rating,
}: TestimonialCardProps) => {
  return (
    <div id="testimonial-card" className="flex flex-col p-5 m-5 card">
      <h2 className="testimonial-text-header">{title}</h2>
      <p className="testimonial-text-content">{message}</p>
      <div className="flex grid-cols-2 justify-start items-center gap-2 mt-2">
        <div className="flex flex-col justify-start items-start">
          {imagePath && (
            <img
              src={imagePath}
              alt={`${name}'s picture`}
              className="testimonial-photo"
            />
          )}
        </div>
        <div className="flex flex-col justify-start items-start">
          <span className="testimonial-text-name">{name}</span>
          <span className="testimonial-text-designation">{designation}</span>
          {rating && (
            <div className="flex mt-1">
              {Array.from({ length: 5 }, (_, index) =>
                index < rating ? (
                  <StarIconSolid
                    key={index}
                    className="h-3 w-3 text-black dark:text-white"
                  />
                ) : (
                  <StarIconOutline
                    key={index}
                    className="h-3 w-3 text-gray-400"
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
