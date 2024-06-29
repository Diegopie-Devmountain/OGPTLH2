// A mock function to mimic making an async request for data
function fetchAmount(amount) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Number(amount)), 1000);
  });
}

export const incrementAsync = async (dispatch) => {
  const result = await fetchAmount(1);
  dispatch({ type: 'incrementByAmount', payload: result });
};

export default function addAmountAsync(amount) {
  return async (dispatch) => {
    const result = await fetchAmount(amount);
    dispatch({ type: 'incrementByAmount', payload: result });
  };
}
