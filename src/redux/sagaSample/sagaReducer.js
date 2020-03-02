const INTIAL_STATE = {
  value: 0
};

const sagaReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default sagaReducer;
