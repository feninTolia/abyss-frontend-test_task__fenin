'use client';
import MainButton from '@/shared/ui/Buttons/MainButton';
import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import { zoomOptions } from '@/shared/constants';

const ZoomGroup = () => {
  const [selectedValue, setSelectedValue] = useState(100);

  return (
    <div className=" flex gap-0.5">
      <MainButton
        onClick={() => {
          if (selectedValue < 25) return;
          setSelectedValue((prev) => prev - 10);
        }}
        className="text-xl font-semibold text-neutral-400"
      >
        -
      </MainButton>
      <CustomSelect
        options={zoomOptions}
        defaultValue={100}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <MainButton
        onClick={() => {
          if (selectedValue > 150) return;
          setSelectedValue((prev) => prev + 10);
        }}
        className="text-xl font-semibold text-neutral-400"
      >
        +
      </MainButton>
    </div>
  );
};

export default ZoomGroup;
