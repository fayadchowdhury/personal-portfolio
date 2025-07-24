import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ContactFormProps {
  contactTitle: string;
  contactDescription: string;
}

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(5).max(1000),
});

type FormData = z.infer<typeof schema>;

const Contact = ({ contactTitle, contactDescription }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // Use isValid to check if the form is valid
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const message = {
    name: "",
    email: "",
    message: "",
  };

  const handleFormSubmit = (data: FieldValues) => {
    // Access the values of the form inputs using the data parameter and the registered names
    if (data.name) {
      message.name = data.name;
    }
    if (data.email) {
      message.email = data.email;
    }
    if (data.message) {
      message.message = data.message;
    }
    console.log(message);
  };

  return (
    <div className="max-md:flex max-md:flex-col grid grid-cols-2 justify-center md:w-full w-screen md:px-20 px-5 md:mt-30 mt-10 md:mb-15 mb-5">
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
          <input
            type="text"
            placeholder="Your Name"
            className="border-1 border-gray-300 dark:border-gray-800 p-2 rounded-lg"
            {...register("name")}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
          <input
            type="email"
            placeholder="Your Email"
            className="border-1 border-gray-300 dark:border-gray-800 p-2 rounded-lg"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
          <textarea
            rows={4}
            placeholder="Your Message"
            className="border-1 border-gray-300 dark:border-gray-800 p-2 rounded-lg"
            {...register("message")}
          />
          {errors.message && (
            <p className="text-danger">{errors.message.message}</p>
          )}
          <button
            disabled={!isValid}
            className="dark:bg-mid-white bg-mid-black dark:text-black text-white p-2 rounded-lg disabled:bg-red-400 disabled:text-black disabled:cursor-not-allowed"
            type="submit"
          >
            {isValid
              ? "Send Message"
              : "Please fill out the form correctly and hit 'Send Message'"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
