import React, { useEffect, useReducer, useMemo } from "react";
import CardHooks from './cardHooks';

const initialState = { count: 0,apiData:[] };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1 };
    case "decrement":
      return { ...state,count: state.count - 1 };
    case "FETCH_DATA":
        return {...state, apiData:action.value }
    default:
      throw new Error();
  }
}

const useEffects = React.memo(() => {
  const [state, dispatch] = useReducer(reducer, initialState);
//   const useMemo = 
  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://reqres.in/api/users?page=1&per_page=12", {
        method: "GET"
      });
      let result = await data
        .text()
        .then(data => JSON.parse(data))
        .catch(err => console.log(err));
        dispatch({type:"FETCH_DATA",value:result.data});
    }
    fetchData();
   
  },[]);

console.log(state,'---apiData---');
  return (
    <div className="container">
        <hr/>
      <h4>Use Effect</h4>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "increment" })}
      >
        Click Here
      </button>
      <h1>Count : {state.count}</h1>
      <button
        className="btn btn-danger"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Click Here
      </button>
      <hr />
      <CardHooks apiData={state.apiData} />
      <hr />
    </div>
  );
});

export default useEffects;
