import { InputHTMLAttributes } from "react";

interface InputProps {
  errors?: string[];
  name: string;
}

export default function Input({
  errors = [],
  name,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  console.log(rest);
  return (
    <div className="flex flex-col gap-4 py-2">
      <input
        name={name}
        className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span
          key={index}
          className="text-red-500 font-medium text-sm -mt-2 mb-2"
        >
          {error}
        </span>
      ))}
    </div>
  );
}
