import { useState } from 'react';

export default function SelectColor() {
  const [favoriteColor, setFavoriteColor] = useState('red');

  const colorElements = {
    red: <span style={{ color: 'red' }}>Red</span>,
    green: <span style={{ color: 'green' }}>Green</span>,
    blue: <span style={{ color: 'blue' }}>Blue</span>,
  };

  return (
    <div>
      <p>{colorElements[favoriteColor]}</p>
      <label htmlFor="fav-color">Select a color</label>
      <select
        id="fav-color"
        name="favoriteColor"
        onChange={(e) => setFavoriteColor(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}