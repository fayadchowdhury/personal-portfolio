import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps {
  type?: string;
  placeholder: string;
  registration?: UseFormRegisterReturn | null; // from react-hook-form register()
  error?: FieldError | null;
  textarea?: boolean;
  rows?: number;
}

const FormInput = ({
  type,
  placeholder,
  registration,
  error,
  textarea,
  rows,
}: FormInputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      {textarea ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className="form-input"
          {...registration}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="form-input"
          {...registration}
        />
      )}
      {error && <p className="text-danger text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInput;
