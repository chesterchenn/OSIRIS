import React from 'react';
import TreeNode from './TreeNode';
import Tree from './Tree';

function TreeChart() {
  return (
    <Tree label="Root">
      <TreeNode label="1-1">
        <TreeNode label="2-1" />
        <TreeNode label="2-2" />
      </TreeNode>
      <TreeNode label="1-2">
        <TreeNode label="2-3" />
      </TreeNode>
    </Tree>
  );
}

export default TreeChart;
