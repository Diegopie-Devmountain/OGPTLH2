import { useState } from "react"
import ClassCounter from "./ClassCounter";
import FuncCounter from "./FuncCounter";

export default function Button () {
  const [show, setShow] = useState(false);

  return (
    <section>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {/* { !show ? null: <ClassCounter /> } */}
      { !show ? null: <FuncCounter /> }
    </section>
  )
}