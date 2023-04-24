import React, { Children } from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './treeNode.module.scss';

export interface TreeNodeProps {
  label: ReactNode;
  hasWife?: boolean;
  children?: ReactNode;
}

interface ICouple {
  label: ReactNode;
}

function TreeNode({ children = null, label, hasWife }: TreeNodeProps) {
  return (
    <li className={clsx(styles.node)}>
      {label}
      {Children.count(children) > 0 && (
        <ul className={clsx(styles.childrenContainer, { [styles.haswife]: hasWife })}>
          {children}
        </ul>
      )}
    </li>
  );
}

function Couple({ label }: ICouple) {
  return <span className={styles.couple}>{label}</span>;
}

TreeNode.defaultProps = {
  children: null,
  hasWife: false,
};

export default TreeNode;
export { Couple };
