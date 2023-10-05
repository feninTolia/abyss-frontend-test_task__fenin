import MainButton from '@/shared/ui/Buttons/MainButton';
import React from 'react';
import ZoomGroup from './ZoomGroup';
import { IHeaderProps } from '@/shared/types';

const Header = ({ setTranslate }: IHeaderProps) => {
  return (
    <header className=" border-b-2 bg-[#F0F0F0] border-neutral-200 flex justify-between px-6 py-4 fixed top-0 w-full z-10">
      <div className=" flex items-center gap-2">
        <h1 className=" text-2xl">Services</h1>
        <span className=" bg-yellow-400 rounded-[10px] py-1 px-2  text-xs text-neutral-100">
          0
        </span>
      </div>

      <div className=" flex gap-2">
        <MainButton isAccent={true}>LIST VIEW</MainButton>
        <MainButton
          onClick={() => setTranslate({ x: 0, y: 0 })}
          className=" [&>svg]:fill-neutral-400 [&>svg]:hover:fill-neutral-100"
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24">
            <path d="M21.7071 2.29292C21.9787 2.56456 22.0707 2.96779 21.9438 3.33038L15.3605 22.14C14.9117 23.4223 13.1257 23.4951 12.574 22.2537L9.90437 16.2471L17.3676 7.33665C17.7595 6.86875 17.1312 6.24038 16.6633 6.63229L7.75272 14.0956L1.74631 11.426C0.504876 10.8743 0.577721 9.08834 1.85999 8.63954L20.6696 2.05617C21.0322 1.92926 21.4354 2.02128 21.7071 2.29292Z" />
          </svg>
        </MainButton>
        <ZoomGroup />
      </div>
    </header>
  );
};

export default Header;
