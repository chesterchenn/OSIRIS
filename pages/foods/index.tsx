import React, { useState } from 'react';
import Button from 'components/button';
import FOODS from 'docs/foods';

export default function Food() {
  const [list, setList] = useState('');
  function randomFood() {
    const r = Math.floor(Math.random() * FOODS.length);
    setList(FOODS[r]);
  }
  return (
    <>
      <h1>今天吃什么</h1>
      <Button type="button" onClick={randomFood}>
        开始
      </Button>
      <div>{list}</div>
    </>
  );
}
