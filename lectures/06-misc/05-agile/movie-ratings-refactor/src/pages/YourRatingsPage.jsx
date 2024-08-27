import { Link, useLoaderData } from 'react-router-dom';

export default function YourRatingsPage() {
  const { ratings } = useLoaderData();

  const ratingsList = ratings.map(({ ratingId, score, movie, movieId }) => {
    const { title } = movie;

    return (
      <li key={ratingId}>
        <Link to={`/movies/${movieId}`}>{title}</Link>: {score}
      </li>
    );
  });

  return (
    <>
      <h1>Your Ratings</h1>
      <ul>{ratingsList}</ul>
    </>
  );
}
