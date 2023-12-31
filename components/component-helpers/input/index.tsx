import React, { ChangeEvent, FunctionComponent } from "react";

type InputProps = {
  type: string;
  placeholder?: string;
  name: string;
  error?: string;
  label?: string;
  placeIcon?: string;
  file?: any;
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
  file,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (eventInput) {
      eventInput(event);
    }
  };

  return (
    <>
      <div className="relative w-full">
        {label && (
          <label className="text-colerText text-lg block mb-1" htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className={`h-[44px] w-full border rounded-[10px] placeholder:text-[#7E8DA0] outline-none px-4 ${
            children && placeIcon === "start" ? "ps-[40px]" : "pe-[40px]"
          }`}
          type={type}
          placeholder={placeholder}
          name={name}
          onChange={handleChange}
        />
        {children && (
          <span
            className={`${
              placeIcon === "start" ? "start-[10px]" : "end-[10px]"
            } absolute bottom-[12px]`}
          >
            {children}
          </span>
        )}
      </div>
        {error && <span className="text-s-error ps-1 text-sm">{error}</span>}
    </>
  );
};

export default Input;
