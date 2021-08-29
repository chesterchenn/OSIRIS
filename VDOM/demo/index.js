console.log('esbuild start...')
import { recursion } from 'vdom';
// const { recursion } = require('vdom');
 const root = document.getElementById("root");
 const obj = recursion(root, {});
console.log(obj);
