import React from 'react';
import Button from 'components/button';

const Million = () => {
  const total = 1000000;
  function add(idx: string) {
    const divElement = document.createElement('div');
    const root = document.getElementById('root');
    const random = Math.floor(Math.random() * total);
    divElement.innerText = `${idx.padStart(6, '0')}  ${random}`;
    divElement.setAttribute('style', 'background: #ff0; margin: 2px;');
    root?.appendChild(divElement);
  }
  function a() {
    console.time('start');
    for (let i = 0; i < total; i++) {
      add(String(i));
    }
    console.timeEnd('start');
  }
  return (
    <>
      <Button onClick={() => a()}>Button</Button>
      <div id="root"></div>
    </>
  );
};

export default Million;
