import React, { ChangeEvent, FunctionComponent } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  name: string;
  error?: string;
  label?: string;
  placeIcon?: string;
  eventInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: JSX.Element;
};

const Input: FunctionComponent<InputProps> = ({
  type,
  placeholder,
  error,
  name,
  label,
  eventInput,
  placeIcon,
  children,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (eventInput) {
      eventInput(event);
    }
  };

  return (
    <div className="relative w-full">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className={`h-[38px] border rounded-8 px-4 ${
          placeIcon === "start" ? "ps-[30px]" : "pe-[30px]"
        }`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
      {children && (
        <span className={`${placeIcon === "start" ? "end-0" : "start-0"}`}>
          {children}
        </span>
      )}
      {error && <span>{error}</span>}
    </div>
  );
};

export default Input;
