import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const IconButton: React.FC<IProps> = ({ ...tail }) => <button {...tail} />;

export default IconButton;
