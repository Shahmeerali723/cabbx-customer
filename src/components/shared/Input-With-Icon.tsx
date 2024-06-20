// components/ReusableInput.jsx
import React, { useRef } from "react";

const InputWithIcon = ({
  icon,
  value,
  placeholder,
  onChange,
  classes,
  name,
  type,
}: any) => {
  const inputRef = useRef<any>(null);

  const handleIconClick = () => {
    if (inputRef?.current) {
      inputRef?.current?.showPicker(); // Show date picker if available
    }
  };

  return (
    <div
      className={
        "flex items-center border-[1px] rounded p-1 bg-[#F3F3F3] bg-opacity-[33%] " +
        (classes?.div || "")
      }
    >
      <input
        ref={inputRef}
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={
          "bg-transparent border-none focus:outline-none text-black placeholder-black w-full " +
          (classes?.input || "")
        }
      />
      {icon && (
        <div
          className={"p-3 rounded-sm cursor-pointer " + (classes?.icon || "")}
          onClick={handleIconClick}
        >
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputWithIcon;
