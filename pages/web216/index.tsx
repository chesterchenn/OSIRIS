import React, { Fragment } from 'react';
import BackToHome from 'components/back-to-home';
import clsx from 'clsx';
import styles from './web.module.scss';

function createElement(bg: string[]) {
  const showWhite = bg.reduce((prev, val) => {
    if (['00', '33', '66'].includes(val)) prev++;
    return prev;
  }, 0);
  const backgroundColor = `#${bg.join('')}`;
  const element = (
    <div
      className={clsx(styles.ele, showWhite >= 3 && styles.whiteText)}
      style={{ backgroundColor }}
    >
      {backgroundColor}
    </div>
  );
  return element;
}

export default function () {
  const colors: string[] = ['00', '33', '66', '99', 'cc', 'ff'];
  return (
    <>
      <BackToHome />
      <h2>Hello, Web216</h2>
      <div className={styles.flex}>
        {colors.map((r: string) => colors.map((g: string) => colors.map((b: string) => (
          <Fragment key={`${r}${g}${b}`}>{createElement([r, g, b])}</Fragment>
        ))))}
      </div>
    </>
  );
}
