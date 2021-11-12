import React, { FormEvent, useRef, useState } from 'react';
import styles from './color.module.scss';
import { useForm } from 'react-hook-form';
import BackToHome from 'components/backToHome'

function getVal(val: string) {
  return parseInt(val).toString(16).padStart(2, '0');
}

export default function () {
  const { register, handleSubmit } = useForm();
  const [bgColor, setBGColor] = useState('');

  const onSubmit = handleSubmit((data) => {
    const { r, g, b } = data;
    const [rr, gg, bb] = [getVal(r), getVal(g), getVal(b)];
    const bgColor = `#${rr}${gg}${bb}`;
    const msg = bgColor.includes('NaN')
      ? `请输入数字值`
      : bgColor.includes('-')
      ? `请输入正整数`
      : bgColor.length > 7
      ? `请输入不超过255的值`
      : null;
    msg ?? setBGColor(bgColor);
  });

  const onHexSubmit = handleSubmit((data) => {
    console.log(data);
    let { hex } = data;
    let arr = [];
    if (hex.startsWith('#')) {
      hex = hex.slice(1);
    }

    for (let i = 0; i < 3; i++) {
      const v = hex.slice(i * 2, (i + 1) * 2);
      const t = parseInt(v, 16).toString(10);
      arr.push(t);
    }
    const bgColor = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
    setBGColor(bgColor);
  });

  return (
    <div>
      <BackToHome />
      <div className={styles.flex}>
        <form onSubmit={onSubmit}>
          <div className={styles.flex}>
            <label>R </label>
            <input {...register('r')} placeholder='请输入R' />
          </div>
          <div className={styles.flex}>
            <label>G </label>
            <input {...register('g')} placeholder='请输入G' />
          </div>
          <div className={styles.flex}>
            <label>B </label>
            <input {...register('b')} placeholder='请输入B' />
          </div>

          <input type='submit' value='转换' />
          <input type='reset' value='重置'></input>
        </form>

        <form onSubmit={onHexSubmit}>
          <div className='flex'>
            <label>16进制 </label>
            <input {...register('hex')} placeholder='请输入16进制' />
          </div>
          <input type='submit' value='转换' />
          <input type='reset' value='重置'></input>
        </form>
        <div>{bgColor}</div>
        <div
          className='showColor'
          style={{ width: 200, height: 200, backgroundColor: bgColor }}
        ></div>
      </div>
    </div>
  );
}
