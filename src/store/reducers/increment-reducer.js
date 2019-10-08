const InitialState = {
  count: 0
};

const incrementReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "INCREMENT_BY_ONE":
      return { ...state, count: state.count + 1 };
    case "DECREMENT_BY_ONE":
        return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};

export default incrementReducer;
