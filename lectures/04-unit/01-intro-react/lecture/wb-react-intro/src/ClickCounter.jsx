import { useState } from 'react';

export default function ClickCounter(props) {
  const [count, setCount] = useState(props.initialCount);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={incrementCount}>
        Click me to increase the count
      </button>
    </div>
  );
}
