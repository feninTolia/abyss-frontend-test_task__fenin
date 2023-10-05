import { Dispatch, PropsWithChildren, SetStateAction } from 'react';

export interface INode {
  id: number;
  name: string;
  children: INode[];
}

export interface IHeaderProps {
  setTranslate: Dispatch<
    SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}

export interface IInputProps {
  name: string;
  id: number;
  handleAddChildNode: (id: number) => void;
  handleUpdateName: (id: number, newName: string) => void;
  handleDeleteChildNode: (id: number) => void;
  nodeChildrenAmount: number;
}

export interface IDragMoveProps extends PropsWithChildren {
  onDragMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (e: React.PointerEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  className?: string;
  onPointerDown?: (e: React.PointerEvent<HTMLDivElement>) => void;
}

export interface ITreeNodeProps {
  node: INode;
  setTreeData: Dispatch<SetStateAction<INode>>;
}

export interface INodeComponentProps {
  index: number;
  child: INode;
  childrenAmount: number;
  setTreeData: Dispatch<SetStateAction<INode>>;
}
