import React from "react";
import PropTypes from "prop-types";

const defaultProp = props => {
    const { name, age} = props;
  return <div><h4>Name:{" "}{name}<br/><span>Age:{" "}{age}</span></h4></div>;
};

export default defaultProp;

defaultProp.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

defaultProp.defaultProps = {
  name: "Hi am the Guest"
};
