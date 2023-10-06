import MainButton from '@/shared/ui/Buttons/MainButton';
import React from 'react';
import CustomSelect from './CustomSelect';
import { zoomOptions } from '@/shared/constants';

const ZoomGroup = () => {
  return (
    <div className=" flex gap-0.5">
      <MainButton className="text-xl font-semibold text-neutral-400">
        -
      </MainButton>
      <CustomSelect options={zoomOptions} defaultValue="100%" />
      <MainButton className="text-xl font-semibold text-neutral-400">
        +
      </MainButton>
    </div>
  );
};

export default ZoomGroup;
