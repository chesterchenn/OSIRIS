import React, { useState } from 'react';
import Button from 'components/button';
import foodsJSON from 'docs/foods.json';

export default function Food() {
  const [list, setList] = useState('');
  const FOODS = foodsJSON.foods;
  const randomFood = () => {
    const random = Math.floor(Math.random() * FOODS.length);
    setList(FOODS[random].name);
  };
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
