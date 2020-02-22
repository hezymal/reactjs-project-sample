import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = ({ ...tail }) => (
  <button {...tail} />
);

export default Button;
