import { useState } from 'react';

export default function MovieList() {
  const [movies, setMovies] = useState(['Alien', 'Predator', 'Alien Vs. Predator']);
  // This initializes our state value movies as an array with 3 items.

  const [inputValue, setInputValue] = useState('');
  // This will be used to hold the value of our input box.

  const moviesDisplay = movies.map((movie) => <h5 key={movie}>{movie}</h5>);
  return (
    <div>
      <h2>Movie List</h2>
      {moviesDisplay}

      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />

      <button
        style={{ marginLeft: '5px' }}
        onClick={() => {
          setMovies([...movies, inputValue]);
          setInputValue('');
        }}
      >
        Add Movie
      </button>
    </div>
  );
}
