import MainButton from '@/shared/ui/Buttons/MainButton';
import React from 'react';

const ZoomGroup = () => {
  return (
    <div className=" flex gap-0.5">
      <MainButton className="text-xl font-semibold text-neutral-400">
        -
      </MainButton>
      <MainButton className="font-semibold text-neutral-400">100%</MainButton>
      <MainButton className="text-xl font-semibold text-neutral-400">
        +
      </MainButton>
    </div>
  );
};

export default ZoomGroup;
