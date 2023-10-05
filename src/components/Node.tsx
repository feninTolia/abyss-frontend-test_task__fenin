import { INodeComponentProps } from '@/shared/types';
import React from 'react';
import TreeNode from './TreeNode';

const Node = ({
  index,
  child,
  childrenAmount,
  setTreeData,
}: INodeComponentProps) => {
  return (
    <li className=" flex items-start  relative ">
      <TreeNode node={child} setTreeData={setTreeData} />

      {/* Lines */}
      <span className=" h-4 w-0.5  bg-neutral-200 absolute top-0 right-1/2 translate-x-1/2" />
      <span
        className={`h-4 w-0.5  bg-neutral-200 absolute top-0 right-1/2 translate-y-14 translate-x-1/2 ${
          child.children.length === 0 && ' bg-transparent'
        }`}
      />
      {index === 0 && (
        <span className="h-1 w-[50%] bg-[#f0f0f0] absolute top-[-2px] left-0" />
      )}
      {index === childrenAmount && (
        <span className="h-1 w-[50%] bg-[#f0f0f0] absolute top-[-2px] right-0" />
      )}
    </li>
  );
};

export default Node;
