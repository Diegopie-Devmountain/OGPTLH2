const initialState = { count: 0 };

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      // reassign value of "count", leave rest of state unchanged
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'incrementByAmount':
      return { ...state, count: state.count + action.payload };
    default:
      return state; // return the existing state unchanged
  }
}
