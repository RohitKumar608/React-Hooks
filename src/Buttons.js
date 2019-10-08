import React from "react";

const Button = props => {
  const { className ,action, disable} = props;
  return <button disabled={disable} onClick={action} className={className}>{props.children}</button>;
};

export default Button;
