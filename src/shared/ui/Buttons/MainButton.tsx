import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isAccent?: boolean;
}

const MainButton = ({ children, className, isAccent, ...args }: IProps) => {
  return (
    <button
      className={`h-10  px-4 bg-neutral-100  border-neutral-300 rounded-sm shadow-sm text-xs hover:bg-neutral-300 hover:text-neutral-100 transition  ${className} ${
        isAccent && 'bg-purple-500 text-neutral-100'
      }`}
      {...args}
    >
      {children}
    </button>
  );
};

export default MainButton;
