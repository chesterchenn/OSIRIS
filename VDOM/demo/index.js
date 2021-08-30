console.log('esbuild start...')
import { recursion, createElement } from 'vdom';
const root = document.getElementById("root");
const obj = recursion(root, {});
const hello = createElement('div', {id: 1}, ['Hello'] )
root.appendChild(hello)
console.log(obj);

