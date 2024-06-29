import { useState } from 'react';
import './dice.css';

function getRandomNum(upperLimit) {
  return Math.ceil(Math.random() * upperLimit);
}

export default function Die(props) {
  const [diceValue, setDiceValue] = useState('?');

  const roll = () => {
    const rollResult = getRandomNum(props.sides);
    setDiceValue(rollResult);
  };

  return (
    <button type="button" className="die" onClick={roll}>
      <i>sides={props.sides}</i>
      <b>{diceValue}</b>
    </button>
  );
}
