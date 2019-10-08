import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { increment, decrement } from "./store/actions/increment";
import { fetchData } from "./store/actions/http-handler";
import DefaultProp from "./default-props";
import Button from "./button";
import RenderProps from "./render-props";
import Greeting from "./Greeting";
import ProductList from "./ProductList";
import "./App.css";
import MyProvider from "./MyProvider";
import UseEffects from './hooks/use-effect';
import UseReducer from './hooks/use-reducer';

class App extends React.Component {
  state = {
    isLoading: true,
  };


  static getDerivedStateFromProps(props, state) {
    return { props };
  }

  componentDidMount() {
    this.props.fetchData();
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props;
  // }
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const name = "Being";
    const age = 25;
    const { count, data, isLoading } = this.props;
    return (
      <div
        className="App"
        style={{ overflowX: "hidden", marginBottom: "50px" }}
      >
        {/* <UseEffects /> */}
        <UseReducer />
        {/* {isLoading ? (
          <Loader type="Puff" color="#00BFFF" height={400} width={400} />
        ) : (
          <React.Fragment>
            <DefaultProp name={name} age={age} />
            <Button
              // action={() => this.props.dispatch({ type: "INCREMENT" })}
              action={this.handleIncrement}
              className="btn btn-info"
            >
              Add
            </Button>
            <span style={spanStyle}>{count}</span>
            <Button
              // action={() => this.props.dispatch({ type: "DECREMENT" })}
              action={this.handleDecrement}
              disable={count === 0}
              className="btn btn-primary"
            >
              Subtracts
            </Button>
            <RenderProps data={data} renderData="Render Props" />
            <Greeting />
          </React.Fragment>
        )}
        <MyProvider>
          <ProductList
          />
        </MyProvider> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.countReducer.count,
    data: state.httpReducer.data,
    isLoading: state.httpReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    fetchData: () => dispatch(fetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const spanStyle = {
  margin: "10px",
  backgroundColor: "brown",
  color: "white",
  fontSize: "18px",
  borderRadius: "7px",
  padding: "4px"
};
