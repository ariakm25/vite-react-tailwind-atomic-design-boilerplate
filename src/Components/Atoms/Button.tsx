import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  icon?: JSX.Element;
  text: string;
}

const Logo: React.FC<ButtonProps> = ({
  icon,
  text,
  ...attributes
}): JSX.Element => {
  return (
    <button
      className="py-2 px-4 rounded-full duration-200 bg-blue-600 hover:bg-blue-800 text-white w-full flex justify-center items-center"
      {...attributes}>
      {icon}
      <span className="mx-2 font-semibold">{text}</span>
    </button>
  );
};

export default Logo;
