import React from 'react';
import TreeNode from './TreeNode';
import type { TreeNodeProps } from './TreeNode';

interface TreeProps {
  label: TreeNodeProps['label'];
  children: TreeNodeProps['children'];
}

function Tree({ label, children }: TreeProps) {
  return (
    <ul
      style={{
        display: 'flex',
        margin: 0,
        paddingInlineStart: 0,
      }}
    >
      <TreeNode label={label}>{children}</TreeNode>
    </ul>
  );
}

export default Tree;
