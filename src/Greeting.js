import React from "react";
import Hoc from "./HOC";
const Greeting = ({ name }) => {
  if (!name) {
    return <div>Connecting...</div>;
  }

  return <div>Hi {name}!</div>;
};

export default Hoc(Greeting);
