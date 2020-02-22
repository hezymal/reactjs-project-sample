import React, { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

const Icon: React.FC<IProps> = ({ ...tail }) => <button {...tail} />;

export default Icon;
