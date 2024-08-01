import { useState } from "react";

export default function Counter () {

  const [ count, setCount ]  = useState(0)

  return (
    <div>
      <p>Count: { count }</p>
      <div>JavaScript</div>
      <button
        onClick={ () => { setCount(count + 2) }}
      >Increment</button>
    </div>
  )
}