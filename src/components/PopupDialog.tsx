import { IPopupDialogProps } from '@/shared/types';
import MainButton from '@/shared/ui/Buttons/MainButton';
import React from 'react';

const PopupDialog = ({
  id,
  isOpenDialog,
  setIsOpenDialog,
  handleAddChildNode,
}: IPopupDialogProps) => {
  const handleClick = () => {
    handleAddChildNode(id);
    setIsOpenDialog(false);
  };

  return (
    <dialog
      open={isOpenDialog}
      onMouseLeave={() => {
        setIsOpenDialog(false);
      }}
      className=" text-center px-10 py-8 rounded-sm shadow-xl drop-shadow-xl absolute top-12 left-[-24px] z-10"
    >
      <span className=" w-4 h-4 bg-white absolute left-8 top-[-8px] rotate-45 rounded-sm " />
      <p className=" text-lg font-semibold whitespace-nowrap py-4">
        What do you want to create?
      </p>
      <div className=" flex justify-center gap-4 mt-4">
        <MainButton onClick={handleClick}>CATEGORY</MainButton>
        <MainButton onClick={handleClick}>SERVICE</MainButton>
      </div>
    </dialog>
  );
};

export default PopupDialog;
