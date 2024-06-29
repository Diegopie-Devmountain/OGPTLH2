import { useDispatch } from "react-redux";


export default function Button (props) {
  const {count, setCount } = props.buttonState;

  const dispatch = useDispatch();

  let operation = () => {}
  let name = ''

  switch (props.type) {
    case 'decrement':
      operation = () => {
        setCount(count -1);
        dispatch({
          type: 'decrement'
        });
      }
      name = 'Decrement'
      break;
    case 'increment': 
      operation = () => {
        setCount(count + 1 );
        dispatch({
          type: 'increment'
        });
      }
      name = 'Increment';
      break;
    default:
      console.error('No Matching Case! Found: ' + props.type);
  }


  return (
    <button
          onClick={ operation }
        > {name} </button>
  )
}