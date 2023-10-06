import MainButton from '@/shared/ui/Buttons/MainButton';
import React, { useState } from 'react';

interface ICustomSelectProps {
  options: Array<string>;
  defaultValue: string;
}

function CustomSelect({ options, defaultValue }: ICustomSelectProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" relative">
      <MainButton
        className=" font-semibold text-neutral-400 w-16"
        onClick={toggleDropdown}
      >
        {selectedValue || defaultValue}
      </MainButton>
      {isOpen && (
        <ul className=" absolute top-[40px]">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              <MainButton
                className={`font-semibold text-neutral-400  w-16 ${
                  option === (selectedValue || defaultValue) &&
                  'text-purple-600'
                }`}
              >
                {option}
              </MainButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
