import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import FormInput from "../components/FormInput";
import { useGSAP } from "@gsap/react";
import { slideIn } from "../components/Animations";

interface ContactFormProps {
  contactTitle: string;
  contactDescription: string;
  contactFormPostUrl: string;
}

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(5).max(1000),
});

type FormData = z.infer<typeof schema>;

const Contact = ({
  contactTitle,
  contactDescription,
  contactFormPostUrl,
}: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Use isValid to check if the form is valid
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );

  const handleFormSubmit = async (data: FieldValues) => {
    // Access the values of the form inputs using the data parameter and the registered names

    setIsSubmitting(true);
    setSubmissionMessage(null);

    const message = {
      name: data.name ?? "",
      email: data.email ?? "",
      message: data.message ?? "",
    };

    // Actually send the message as a JSON body
    try {
      const response = await fetch(contactFormPostUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      if (!response.ok) {
        setSubmissionMessage("Failed to send message");
        setIsSubmitting(false);
      } else {
        setSubmissionMessage("Message sent successfully!");
        setTimeout(() => {
          setSubmissionMessage(null);
        }, 3000);
        setIsSubmitting(false);
      }
    } catch (err) {
      setSubmissionMessage("Failed to send message");
      setTimeout(() => {
        setSubmissionMessage(null);
      }, 3000);
      setIsSubmitting(false);
    }
  };
  useGSAP(() => {
    slideIn({
      elem: "#contact",
      startX: -20,
      endX: 0,
      startOpacity: 0,
      endOpacity: 1,
      duration: 1.2,
      stagger: 0.2,
    });
  });
  return (
    <section
      id="contact"
      className="max-md:flex max-md:flex-col grid grid-cols-2 justify-center md:w-full w-screen md:px-20 px-5 md:mt-30 mt-10 md:pb-15 pb-5"
    >
      <div className="flex flex-col gap-2 max-md:mb-3">
        <h1 className="text-header font-extrabold max-md:text-center">
          {contactTitle}
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-sub-header max-md:text-center">
            {contactDescription}
          </p>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <FormInput
            type="text"
            placeholder="Your Name"
            registration={register("name")}
            error={errors.name}
            textarea={false}
          />
          <FormInput
            type="email"
            placeholder="Your Email"
            registration={register("email")}
            error={errors.email}
            textarea={false}
          />
          <FormInput
            rows={4}
            placeholder="Your Message"
            registration={register("message")}
            error={errors.message}
            textarea={true}
          />
          <button
            disabled={!isValid || isSubmitting}
            className={`
              p-2 rounded-lg
              ${isSubmitting ? "bg-gray-400 text-black" : ""}
              ${
                submissionMessage === "Failed to send message"
                  ? "dark:bg-fail-bg-dark bg-fail-bg-light text-black"
                  : ""
              }
              ${
                submissionMessage === "Message sent successfully!"
                  ? "dark:bg-success-bg-dark bg-success-bg-lighttext-white"
                  : ""
              }
              ${
                !isSubmitting && !submissionMessage && isValid
                  ? "dark:bg-mid-white bg-mid-black dark:text-black text-white"
                  : ""
              }
              ${
                !isSubmitting && !submissionMessage && !isValid
                  ? "dark:bg-disabled-bg-dark bg-disabled-bg-light dark:text-black text-white"
                  : ""
              }
              disabled:cursor-not-allowed
            `}
            type="submit"
          >
            {isSubmitting
              ? "Sending..."
              : submissionMessage
              ? submissionMessage
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
