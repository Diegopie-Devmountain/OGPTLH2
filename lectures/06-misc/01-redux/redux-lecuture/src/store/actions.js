export function addAmount(amount) {
  return { type: 'incrementByAmount', payload: amount}
}


function fetchAmount(amount) {
  return new Promise( (resolve) => {
    setTimeout( () => {
      resolve(amount);
    }, 3000)
  })
}

export function addAmountAsync(amount) {
  return async (dispatch) => {
    const response = await fetchAmount(amount);
    dispatch({type: 'incrementByAmount', payload: response});
  }
}

