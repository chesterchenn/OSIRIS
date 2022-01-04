import React from 'react';

type IProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default Input;
