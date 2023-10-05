import { INode } from '../types';

class NodeService {
  updateNodeName(id: number, newName: string, node: INode): any {
    if (node.id === id) {
      return { ...node, name: newName };
    }

    if (node.children) {
      return {
        ...node,
        children: node.children.map((child) =>
          this.updateNodeName(id, newName, child)
        ),
      };
    }
    return node;
  }

  addChildNode(id: number, node: INode): any {
    const date = new Date();

    if (node.id === id) {
      return {
        ...node,
        children: [
          ...node.children,
          { id: date.getTime(), name: '', children: [] },
        ],
      };
    }

    if (node.children) {
      return {
        ...node,
        children: node.children.map((child) => this.addChildNode(id, child)),
      };
    }
    return node;
  }

  deleteNodeById(id: number, node: INode): any {
    if (node.id === id) {
      return null;
    }

    if (node.children && node.children.length > 0) {
      const updatedChildren = node.children.map((child) =>
        this.deleteNodeById(id, child)
      );

      node.children = updatedChildren.filter(Boolean);
    }

    return node;
  }
}

export const nodeService = new NodeService();
