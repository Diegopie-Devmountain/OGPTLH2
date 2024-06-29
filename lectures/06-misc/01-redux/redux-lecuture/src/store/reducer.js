const initialState = {
  count: 5,
  name: "Redux",
  color: "red",
};

// param1: state object
// param2: action object - define how to update state
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "increment":
      // console.log(state);
      // eslint-disable-next-line
      const incCount = state.count + 1;
      // console.log(incCount);
      return { ...state, count: incCount };
    case "decrement":
      // eslint-disable-next-line
      const decCount = state.count - 1;
      return { ...state, count: decCount };
    case "incrementByAmount":
      // console.log(typeof action.payload);
      // eslint-disable-next-line
      const amountCount = state.count + action.payload;
      // console.log({ amountCount });
      return { ...state, count: amountCount };
    default:
      return state;
  }
}
