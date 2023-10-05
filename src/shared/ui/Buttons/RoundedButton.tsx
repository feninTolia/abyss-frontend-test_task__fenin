import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const RoundedButton = ({ children, className, ...args }: IProps) => {
  return (
    <button
      className={`h-6 w-6 flex items-center justify-center bg-neutral-300  rounded-full shadow-sm  text-neutral-100 text-xl font-semibold  hover:bg-neutral-400  transition ${className} `}
      {...args}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
