import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router-dom';
import CreateRatingForm from '../components/CreateRatingForm.jsx';

export default function MovieDetailPage() {
  const {
    movie: { title, posterPath, overview, movieId },
  } = useLoaderData();
  const navigate = useNavigate();

  const handleCreateRating = async (event, { score }) => {
    event.preventDefault();
    const res = await axios.post('/api/ratings', { score: score, movieId: movieId });
    if (res.data) {
      navigate('/me');
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <img src={posterPath} alt={title} style={{ width: '200px' }} />
      <p>{overview}</p>
      <h2>Rate this movie</h2>
      <CreateRatingForm onCreateRating={handleCreateRating} />
    </>
  );
}
