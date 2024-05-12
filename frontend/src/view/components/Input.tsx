import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputId = id ?? name;
  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputId}
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800"
      />
      <label htmlFor={inputId} className="absolute left-[13px] top-3.5">
        {placeholder}
      </label>
    </div>
  );
}
