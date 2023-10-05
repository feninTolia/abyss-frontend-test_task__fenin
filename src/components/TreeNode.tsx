import React from 'react';
import InputComponent from './InputComponent';
import { ITreeNodeProps } from '@/shared/types';
import { nodeService } from '@/shared/lib/NodesService';
import Node from './Node';

function TreeNode({ node, setTreeData }: ITreeNodeProps) {
  const handleUpdateName = (id: number, newName: string) => {
    setTreeData((prevTreeData) =>
      nodeService.updateNodeName(id, newName, prevTreeData)
    );
  };

  const handleAddChildNode = (id: number) => {
    setTreeData((prevTreeData) => nodeService.addChildNode(id, prevTreeData));
  };

  const handleDeleteChildNode = (id: number) => {
    setTreeData((prevTreeData) => {
      const treeDataAfterDelete = nodeService.deleteNodeById(id, prevTreeData);
      return { ...treeDataAfterDelete };
    });
  };

  return (
    <div className="flex justify-center flex-col w-fit ">
      <div
        className={`m-auto flex items-center  ${node.id === 1 && 'mb-[-12px]'}`}
      >
        <InputComponent
          name={node.name}
          handleUpdateName={handleUpdateName}
          handleAddChildNode={handleAddChildNode}
          handleDeleteChildNode={handleDeleteChildNode}
          id={node.id}
          nodeChildrenAmount={node.children.length}
        />
      </div>

      {node.children.length > 0 && (
        <ul
          className={`flex gap-32 border-neutral-200 border-t-2 ${
            node.children.length === 1 && ' border-none'
          }`}
        >
          {node.children.map((child, index) => (
            <Node
              key={node.id}
              index={index}
              child={child}
              childrenAmount={node.children.length - 1}
              setTreeData={setTreeData}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TreeNode;
