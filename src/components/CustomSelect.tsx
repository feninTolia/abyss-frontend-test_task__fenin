import MainButton from '@/shared/ui/Buttons/MainButton';
import React, { Dispatch, useState } from 'react';

interface ICustomSelectProps {
  options: Array<number>;
  defaultValue: number;
  selectedValue: number;
  setSelectedValue: Dispatch<React.SetStateAction<number>>;
}

function CustomSelect({
  options,
  defaultValue,
  selectedValue,
  setSelectedValue,
}: ICustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: number) => {
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
        {(selectedValue || defaultValue) + '%'}
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
                {option + '%'}
              </MainButton>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
