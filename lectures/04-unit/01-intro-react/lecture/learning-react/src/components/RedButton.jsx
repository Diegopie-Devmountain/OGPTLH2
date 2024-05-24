
export default function RedButton(props) {
  console.log(props);

  function alertMessage(message){
    alert(message)
  }

  return (
    <button
      className="RedButton"
      style={{ color: props.color }} type="button"
      onClick={  () => { alertMessage(props.message) }   }
    >
      {props.message}
    </button>
  )
}