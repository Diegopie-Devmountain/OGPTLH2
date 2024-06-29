import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "./components/Button.jsx";

import { addAmount, addAmountAsync } from "./store/actions.js";

function App() {

  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const [inputState, setInputState] = useState('');

  const reduxCount = useSelector((state) => {
    return state.count;
  })


  return (
    <main>
      <section>
        <h2>React</h2>
        <Button
          buttonState={{ count, setCount }}
          type='decrement'
        />
        <p>{count}</p>
        <Button
          buttonState={{ count, setCount }}
          type='increment'
        />
      </section>
      <br />
      <section>
        <h2>Redux</h2>
        <p>{reduxCount}</p>
      </section>
      <section>
        <h2>Increment By Value</h2>
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            // console.log(typeof(inputState));
            // dispatch({ type: 'incrementByAmount', payload: parseInt(inputState)})
            dispatch(
              addAmountAsync(
                parseInt(inputState)
              )
            )
          }}
        >
          <input
            type='text'
            value={inputState}
            onChange={(event) => {
              setInputState(event.target.value)
            }}
          />
          <button type="submit">Add Amount</button>

        </form>

      </section>
    </main>
  )
}

export default App
