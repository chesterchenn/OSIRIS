import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from 'components/input';
import Button from 'components/button';
import styles from './color.module.scss';

function getVal(val: string) {
  return parseInt(val, 10).toString(16).padStart(2, '0');
}

export default function Colors() {
  const { register, handleSubmit } = useForm();
  const [bgColor, setBGColor] = useState('');
  const [msg, setMsg] = useState('');

  const onSubmit = handleSubmit((data) => {
    const { r, g, b } = data;
    const [rr, gg, bb] = [getVal(r), getVal(g), getVal(b)];
    const rrggbb = `#${rr}${gg}${bb}`;

    if (rrggbb.includes('NaN')) {
      setMsg('请输入数字值');
    } else if (rrggbb.includes('-')) {
      setMsg('请输入正整数');
    } else if (rrggbb.length > 7) {
      setMsg('请输入不超过255的值');
    } else {
      setMsg('');
    }

    setBGColor(rrggbb);
  });

  const onHexSubmit = handleSubmit((data) => {
    let { hex } = data;
    const arr = [];
    if (hex.startsWith('#')) {
      hex = hex.slice(1);
    }

    for (let i = 0; i < 3; i += 1) {
      const v = hex.slice(i * 2, (i + 1) * 2);
      const t = parseInt(v, 16).toString(10);
      arr.push(t);
    }
    const rgb = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
    setBGColor(rgb);
  });

  return (
    <>
      <div className={styles.flex}>
        <form onSubmit={onSubmit}>
          <div className={styles.flex}>
            <label>R </label>
            <Input {...register('r')} placeholder="请输入R" />
          </div>
          <div className={styles.flex}>
            <label>G </label>
            <Input {...register('g')} placeholder="请输入G" />
          </div>
          <div className={styles.flex}>
            <label>B </label>
            <Input {...register('b')} placeholder="请输入B" />
          </div>

          <Button type="submit">转换</Button>
          <Button type="reset">重置</Button>
        </form>

        <form onSubmit={onHexSubmit}>
          <div className="flex">
            <label>16进制 </label>
            <Input {...register('hex')} placeholder="请输入16进制" />
          </div>
          <Button type="submit">转换</Button>
          <Button type="reset">重置</Button>
        </form>
      </div>
      <div>{msg !== '' ? msg : bgColor}</div>
      {msg === '' && (
        <div className="showColor" style={{ width: 200, height: 200, backgroundColor: bgColor }} />
      )}
    </>
  );
}
