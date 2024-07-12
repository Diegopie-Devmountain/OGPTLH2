import { Router } from "express";
import { User, Movie } from '../models/index.js';
import { loginRequired } from "../middlewares/auth.middlewares.js";

const ratingsRouter = Router();

ratingsRouter.get('/all', loginRequired, async (req, res) => {
  const { userId } = req.session;

  const user = await User.findByPk(userId);
  const ratings = await user.getRatings({
    include: {
      model: Movie,
      attributes: ['title'],
    },
  });

  res.json(ratings);
});

ratingsRouter.post('/new', loginRequired, async (req, res) => {
  const { userId } = req.session;
  const { movieId, score } = req.body;

  const user = await User.findByPk(userId);
  const rating = await user.createRating({ movieId: movieId, score: score });

  res.json(rating);
});


export default ratingsRouter;