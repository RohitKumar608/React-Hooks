import React from "react";
import ButtonHoc from "./Buttons";
const Button = props => {
  const { className, action,disable } = props;
  const classNames = ["btn", className].join(" ");
  return <ButtonHoc disable={disable} action={action} className={classNames}>{props.children}</ButtonHoc>;
};

export default Button;
