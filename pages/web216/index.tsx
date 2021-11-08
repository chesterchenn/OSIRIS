import styles from './web.module.scss';
import { Fragment } from 'react';

function createElement(bg: string) {
  const element = (
    <div>
      <div className={styles.ele} style={{ backgroundColor: bg }}></div>
      <div>${bg}</div>
    </div>
  );
  return element;
}

export default function () {
  const colors: string[] = ['00', '33', '66', '99', 'cc', 'ff'];
  return (
    <>
      <h2>Hello, Web216</h2>
      <div className={styles.flex}>
        {colors.map((r: string) =>
          colors.map((g: string) =>
            colors.map((b: string) => (
              <Fragment key={`${r}${g}${b}`}>{createElement(`#${r}${g}${b}`)}</Fragment>
            ))
          )
        )}
      </div>
    </>
  );
}
