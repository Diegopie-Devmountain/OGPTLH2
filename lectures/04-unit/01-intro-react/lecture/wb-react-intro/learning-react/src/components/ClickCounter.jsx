import { useState } from "react"

export default function ClickCounter (props) {

  // [getter, setter] - useState(arg: initial value)
  const [ count, setCount ] = useState(0)
  const [ countTen, setCountTen] = useState(10)

  return (
    <div>
      <p>{countTen}</p>
      <p>{ count }</p>
      <button onClick={ () => {
        setCount(count + 1)
        setCountTen(countTen + 10)
      } }>
        Click to Increment
      </button>
    </div>
  )

}