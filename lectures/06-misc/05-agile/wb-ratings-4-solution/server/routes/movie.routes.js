import { Router } from "express";
import { Movie } from '../models/index.js'

const movieRouter = Router();

movieRouter.get('/all', async (req, res) => {
  const allMovies = await Movie.findAll();
  res.json(allMovies);
});

movieRouter.get('/:movieId', async (req, res) => {
  const { movieId } = req.params;
  const movie = await Movie.findByPk(movieId);
  res.json(movie);
});


export default movieRouter;