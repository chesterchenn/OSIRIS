import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import './index.scss';

const root = document.getElementById('root');
const ele = (
  <div className='container'>
    <Card title='颜色转换' link='' />
    <Card title='web216颜色' link='' />
  </div>
);
ReactDOM.render(ele, root);
