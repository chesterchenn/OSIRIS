import { ReactNode } from 'react';

interface Props {
  children?: React.ReactNode;
}

const Card = (props: Props) => {
  return <h2>{props.children}</h2>;
};

export default Card;
