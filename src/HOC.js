import React from "react";
const hoc = ComposedComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { name: "" };
    }

    componentDidMount() {
      // this would fetch or connect to a store
      this.setState({ name: "Michael" });
    }

    render() {
      return <ComposedComponent {...this.props} name={this.state.name} />;
    }
  };
};
export default hoc;
