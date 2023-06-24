"use client";
import React, {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

type SelectProps = {
  placeholder: string;
  name: string;
  error?: string;
  label?: string;
  placeIcon?: string;
  eventSelect?: (event: ChangeEvent<HTMLSelectElement>) => void;
  children?: JSX.Element;
  data?: any;
};

const Select: FunctionComponent<SelectProps> = ({
  placeholder,
  error,
  name,
  label,
  eventSelect,
  placeIcon,
  children,
  data,
}) => {
  const iniData = [
    {
      id: 1,
      value: "value1",
      text: "text 1",
    },
    {
      id: 2,
      value: "value2",
      text: "text 2",
    },
    {
      id: 3,
      value: "value3",
      text: "text 3",
    },
    {
      id: 4,
      value: "value4",
      text: "text 4",
    },
  ];

  const [dataOptiob, setDataOption] = useState(iniData);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (eventSelect) {
      eventSelect(event);
    }
  };

  useEffect(() => {
    if (data) {
      setDataOption(data);
    }
  }, [data]);

  return (
    <div className="relative w-full mb-4">
      {label && (
        <label className="text-colerText text-lg block mb-1" htmlFor={name}>
          {label}
        </label>
      )}
      <select name={name}
      className={`h-[42px] bg-transparent w-full border rounded-[10px] placeholder:text-[#7E8DA0] outline-none px-4 `}
      onChange={handleChange}>
        <option value={placeholder}>{placeholder}</option>
        {dataOptiob?.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {/* {children && (
        <span className={`${placeIcon === "start" ? "end-0" : "start-0"}`}>
          {children}
        </span>
      )} */}
        {error && <span className="text-s-error ps-1 text-sm">{error}</span>}
    </div>
  );
};

export default Select;
