import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const RightArrow: React.FC<IProps> = ({ ...tail }) => <button {...tail} />;

export default RightArrow;
