import React from 'react';
import './styles.scss';

interface IProps {
  title: string;
  link?: string;
}

export default function (props: IProps) {
  return (
    <div className='card'>
      <div className='card__content'></div>
      <div className='card__footer'>
        <a href={props.link}>{props.title}</a>
      </div>
    </div>
  );
}
