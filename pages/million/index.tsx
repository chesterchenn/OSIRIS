import React from 'react';
import Button from 'components/button';

function Million() {
  const total = 1000000;
  const once = 200;
  const counter = total / once;
  let renderCounter = 1;
  function b() {
    if (renderCounter <= counter) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
      window.requestAnimationFrame(add);
    }
  }
  function add() {
    const fragment = document.createDocumentFragment();
    const root = document.getElementById('root');
    for (let i = 0; i < once; i++) {
      const divElement = document.createElement('div');
      const random = Math.floor(Math.random() * total);
      const strCount = String(renderCounter);
      divElement.innerText = `${strCount} ${random}`;
      divElement.setAttribute('style', 'background: #ffe411; margin: 2px;');
      fragment.appendChild(divElement);
    }
    root?.appendChild(fragment);
    renderCounter += 1;
    b();
  }
  function addA() {
    const fragment = document.createDocumentFragment();
    const root = document.getElementById('root');
    for (let i = 0; i < total; i++) {
      const divElement = document.createElement('div');
      const random = Math.floor(Math.random() * total);
      divElement.innerText = `${i} ${random}`;
      divElement.setAttribute('style', 'background: #ffe411; margin: 2px;');
      fragment.appendChild(divElement);
    }
    root?.appendChild(fragment);
  }
  return (
    <>
      <Button onClick={() => addA()}>Button1</Button>
      <Button onClick={() => b()}>Button2</Button>
      <div id="root" />
    </>
  );
}

export default Million;
