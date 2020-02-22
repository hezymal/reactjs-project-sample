import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const LeftArrow: React.FC<IProps> = ({ ...tail }) => <button {...tail} />;

export default LeftArrow;
