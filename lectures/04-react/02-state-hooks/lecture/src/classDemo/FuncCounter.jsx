import{ useState, useEffect } from 'react';

const FuncCounter = () => {
  // useState hook to manage state
  const [count, setCount] = useState(0);

  // useEffect hook to perform side effects
  useEffect(() => {console.log("Component Mounted");}, [])

  useEffect(() => {
    // Update the document title with the current count
    console.log("Component Updated");
    document.title = `Count: ${count}`;

    // Cleanup function (This time on mount and state change)
    return () => {
      console.log("Component Unmounted");
      document.title = "React App"; // Reset document title when component unmounts
    };
  }, [count]); // Only re-run the effect if count changes

  // Function to handle incrementing count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default FuncCounter;