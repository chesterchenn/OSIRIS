import React from 'react';
import './styles.scss';

interface IProps {
  children?: React.ReactNode;
}

export default function (props: IProps) {
  return (
    <div className='card'>
      <div className='card__content'></div>
      <div className='card__footer'>
        {props.children}
      </div>
    </div>
  );
}
