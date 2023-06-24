type PropsButton = {
  type: "button" | "submit" | "reset"; // Allowed string literal types for button type
  text: string;
  callback?: () => void;
  children?: JSX.Element;
  hasBg?: string;
  itemAction?: string;
};

const Button = ({
  type,
  text,
  callback,
  children,
  hasBg,
  itemAction,
}: PropsButton) => {
  return (
    <div className="button">
      <button className={`${
        itemAction === "button" ? "bg-gray-950":
        itemAction === "add" ? "bg-[#00f]" :
        itemAction === "delete" ? "bg-[#f00]":"" }
        ${itemAction ? "text-white" :"text-gray-950"}
        `} type={type} onClick={callback}>
        {children && <span className="">{children}</span>}
        {text}
      </button>
    </div>
  );
};

export default Button;
