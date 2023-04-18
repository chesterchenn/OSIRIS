import React, { Children } from 'react';
import type { ReactNode } from 'react';
import styles from './treeNode.module.scss';

export interface TreeNodeProps {
  label: ReactNode;
  children?: ReactNode;
}

function TreeNode({ children = null, label }: TreeNodeProps) {
  return (
    <li className={styles.node}>
      {label}
      {Children.count(children) > 0 && <ul className={styles.childrenContainer}>{children}</ul>}
    </li>
  );
}

TreeNode.defaultProps = {
  children: null,
};

export default TreeNode;
