'use client';
import { IInputProps } from '@/shared/types';
import RoundedButton from '@/shared/ui/Buttons/RoundedButton';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import PopupDialog from './PopupDialog';

const InputComponent = ({
  id,
  name,
  handleAddChildNode,
  handleUpdateName,
  handleDeleteChildNode,
}: IInputProps) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditClick = () => {
    setIsDisabled(false);
    //@ts-ignore
    inputRef?.current.focus();
  };

  const handleAddNodeClick = () => {
    if (id === 1) {
      handleAddChildNode(id);
      return;
    }
    setIsOpenDialog(true);
  };

  return (
    <>
      <input
        ref={inputRef}
        placeholder="Category name"
        value={name}
        className={`w-36 h-10 px-1 m-1 my-4 text-center font-semibold placeholder:font-light placeholder:text-neutral-200 select-none pointer-events-none ${
          (!isDisabled || (!isConfirmed && id !== 1)) &&
          'select-auto pointer-events-auto'
        } ${id === 1 && ' border-dashed border-2 border-neutral-300'}`}
        onChange={(e) => handleUpdateName(id, e.target.value)}
        onBlur={() => setIsDisabled(true)}
      />

      <div className=" flex gap-1 ml-2 relative">
        {id !== 1 && !isConfirmed ? (
          <>
            <RoundedButton
              className=" bg-yellow-300"
              onClick={() => handleDeleteChildNode(id)}
            >
              <Image src={'/cross.svg'} alt="delete" width={18} height={18} />
            </RoundedButton>
            <RoundedButton
              className=" bg-green-400"
              onClick={() => setIsConfirmed(true)}
            >
              <Image
                src={'/check-mark.svg'}
                alt="delete"
                width={12}
                height={12}
              />
            </RoundedButton>
            <RoundedButton className="bg-transparent shadow-none pointer-events-none" />
          </>
        ) : (
          <>
            <RoundedButton onClick={handleAddNodeClick}>+</RoundedButton>
            <PopupDialog
              id={id}
              isOpenDialog={isOpenDialog}
              setIsOpenDialog={setIsOpenDialog}
              handleAddChildNode={handleAddChildNode}
            />
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
                  <Image
                    src={'/cross.svg'}
                    alt="delete"
                    width={16}
                    height={16}
                  />
                </RoundedButton>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default InputComponent;
