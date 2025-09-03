import TestimonialCard from "../components/TestimonialCard";
import PageSlider from "../components/PageSlider";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

interface TestimonialsProps {
  testimonials: {
    title: string;
    message: string;
    name: string;
    imagePath: string;
    rating: number;
  }[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const isMobileSmall = useMediaQuery({ maxWidth: 770 });

  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = isMobileSmall ? 1 : 3;
  const totalTestimonialsPages = Math.ceil(
    testimonials.length / testimonialsPerPage
  );

  const testimonialsFocus = testimonials.slice(
    currentPage * testimonialsPerPage,
    currentPage * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <section id="testimonials">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {testimonialsFocus.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
        <div />
      </div>
      <div className="lg:col-span-3 flex flex-col items-center justify-center">
        <PageSlider
          onLeftClick={() => {
            setCurrentPage(
              (currentPage - 1 + totalTestimonialsPages) %
                totalTestimonialsPages
            );
          }}
          onRightClick={() => {
            setCurrentPage((currentPage + 1) % totalTestimonialsPages);
          }}
          totalPages={totalTestimonialsPages}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default Testimonials;
