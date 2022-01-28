import BackToHome from 'components/back-to-home';
import Input from 'components/input';
import { ChangeEvent, useState } from 'react';

export default function () {
  const [val, setVal] = useState<string>('');
  /**
   * 格式化千分位
   */
  function formatqty(number: number | string, precise = 0, qty = ',') {
    const num = Number(number);
    const negative = num < 0 ? '-' : '';
    if (number === '' || isNaN(num)) return number.toString();
    const i = `${Math.abs(parseInt(String(num), 10))}`;

    const tail = String(Math.abs(num)).slice(i.length);
    let j = i.length > 3 ? i.length % 3 : 0;
    return (
      negative +
      (j ? i.substr(0, j) + qty : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${qty}`) +
      (precise ? Number(tail).toFixed(precise).slice(1) : tail)
    );
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value = value.replace(/[^,.0-9]/, '');
    if (!/[.]{1}[0]*$/.test(value)) {
      value = value.replace(/[,]/g, '');
      value = formatqty(value);
    }
    setVal(value);
  }

  return (
    <>
      <BackToHome />
      <Input value={val} onChange={(e) => handleChange(e)} />
    </>
  );
}
