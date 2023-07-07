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
        itemAction === "button" ? "bg-25":
        itemAction === "add" ? "bg-[#3D9635] border-[#3D9635] " :
        itemAction === "delete" ? "bg-s-error border-s-error ":"" }
        ${itemAction ? "text-white" :"text-25"}
        border-25 px-3 rounded-[10px] flex items-center justify-center border min-w-[170px] h-[44px]
        `} type={type} onClick={callback}>
        {children && <span className="me-1">{children}</span>}
        {text}
      </button>
    </div>
  );
};

export default Button;
