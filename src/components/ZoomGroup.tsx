'use client';
import MainButton from '@/shared/ui/Buttons/MainButton';
import React from 'react';
import CustomSelect from './CustomSelect';
import { zoomOptions } from '@/shared/constants';
import { useZoomContext } from '@/shared/context/ZoomContext';

const ZoomGroup = () => {
  const { zoom, setZoom } = useZoomContext();

  return (
    <div className=" flex gap-0.5">
      <MainButton
        onClick={() => {
          if (zoom < 25) return;
          setZoom((prev) => prev - 10);
        }}
        className="text-xl font-semibold text-neutral-400"
      >
        -
      </MainButton>
      <CustomSelect
        options={zoomOptions}
        defaultValue={100}
        selectedValue={zoom}
        setSelectedValue={setZoom}
      />
      <MainButton
        onClick={() => {
          if (zoom > 150) return;
          setZoom((prev) => prev + 10);
        }}
        className="text-xl font-semibold text-neutral-400"
      >
        +
      </MainButton>
    </div>
  );
};

export default ZoomGroup;
