import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addAmountAsync, { incrementAsync } from './async.js';

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <button aria-label="Decrement value" onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
      <span>{count}</span>
      <button aria-label="Increment value" onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button aria-label="Increment value" onClick={() => dispatch(incrementAsync)}>
        Increment Async
      </button>
      <input
        className="amount-box"
        aria-label="Set amount to add"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        aria-label="Add Amount Async"
        onClick={() => dispatch(addAmountAsync(incrementAmount))}
      >
        Add Amount Async
      </button>
    </div>
  );
}
