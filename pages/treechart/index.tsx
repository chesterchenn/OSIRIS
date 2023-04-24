import React from 'react';
import clsx from 'clsx';
import TreeNode, {Couple} from './TreeNode';
import Tree from './Tree';
import styles from './index.module.scss';

interface ILabel {
  label: string;
  hasWife?: boolean;
}

function Label({ label, hasWife }: ILabel) {
  return <span className={clsx({[styles.hasWifeLabel]: hasWife})}>{label}</span>;
}

Label.defaultProps = {
  hasWife: false,
};

function TreeChart() {
  return (
    <Tree label=<Label label='Root' />>
      <TreeNode label="1-1">
        <TreeNode label="2-1">
          <TreeNode label=<Label label="3-1" /> hasWife>
            <Couple label="1234" />
            <TreeNode label="4-1" />
            <TreeNode label="4-1" />
          </TreeNode>
        </TreeNode>
        <TreeNode label=<Label label="2-2" /> hasWife>
          <Couple label="123" />
          <TreeNode label="3-1" />
          <TreeNode label="3-1" />
        </TreeNode>
      </TreeNode>
      <TreeNode label="1-2">
        <TreeNode label="2-3">
          <TreeNode label="3-3" />
        </TreeNode>
      </TreeNode>
    </Tree>
  );
}

export default TreeChart;
