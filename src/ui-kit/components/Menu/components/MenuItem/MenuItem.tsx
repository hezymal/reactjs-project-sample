import React from "react";
import "./styles.scss";

interface IProps {}

const MenuItem: React.FC<IProps> = ({ children }) => (
  <li className="MenuItem">{children}</li>
);

export default MenuItem;
