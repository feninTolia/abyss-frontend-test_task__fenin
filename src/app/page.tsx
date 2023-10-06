'use client';
import DragMove from '@/components/DragMove';
import Header from '@/components/Header';
import TreeNode from '@/components/TreeNode';
import { useZoomContext } from '@/shared/context/ZoomContext';
import { INode } from '@/shared/types';
import { useState } from 'react';

const initialTreeData: INode = {
  id: 1,
  name: 'Categories',
  children: [],
};

export default function Home() {
  const [treeData, setTreeData] = useState<INode>(initialTreeData);
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0,
  });
  const { zoom } = useZoomContext();

  const handleDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY,
    });
  };

  return (
    <main>
      <Header setTranslate={setTranslate} />

      <div className=" min-h-screen flex justify-center items-center">
        <DragMove onDragMove={handleDragMove} onPointerUp={() => {}}>
          <div
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`,
              scale: zoom / 100,
            }}
          >
            {treeData && <TreeNode node={treeData} setTreeData={setTreeData} />}
          </div>
        </DragMove>
      </div>
    </main>
  );
}
