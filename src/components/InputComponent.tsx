'use client';
import { IInputProps } from '@/shared/types';
import RoundedButton from '@/shared/ui/Buttons/RoundedButton';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const InputComponent = ({
  id,
  name,
  handleAddChildNode,
  handleUpdateName,
  handleDeleteChildNode,
  nodeChildrenAmount,
}: IInputProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    setIsDisabled(false);
    //@ts-ignore
    inputRef?.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        className={`w-32 h-10 px-1 m-1 my-4 text-center font-semibold select-none pointer-events-none ${
          !isDisabled && ' select-auto pointer-events-auto'
        } ${
          (id === 1 && ' border-dashed border-2 border-neutral-300') ||
          (nodeChildrenAmount === 1 && 'bg-blue-400') ||
          (nodeChildrenAmount === 2 && 'bg-neutral-400') ||
          (nodeChildrenAmount >= 3 && 'bg-orange-400')
        }`}
        onChange={(e) => handleUpdateName(id, e.target.value)}
        onBlur={() => setIsDisabled(true)}
      />

      <div className=" flex gap-1 ml-2">
        <RoundedButton onClick={() => handleAddChildNode(id)}>+</RoundedButton>

        {id !== 1 && (
          <>
            <RoundedButton
              onClick={handleEditClick}
              className={`${!isDisabled && 'bg-neutral-500'}`}
            >
              <Image src={'/pen.svg'} width={12} height={12} alt="edit" />
            </RoundedButton>
            <RoundedButton
              onClick={() => handleDeleteChildNode(id)}
              className=" bg-red-400"
            >
              <Image src={'/cross.svg'} alt="delete" width={16} height={16} />
            </RoundedButton>
          </>
        )}
      </div>
    </>
  );
};

export default InputComponent;
