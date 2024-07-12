import { Router } from 'express';

import movieRouter from './movie.routes.js';
import ratingsRouter from './ratings.routes.js';
import authRouter from './auth.routes.js';

const appRouter = Router();

appRouter.use('/api/movies', movieRouter);
appRouter.use('/api/ratings', ratingsRouter);
appRouter.use('/api', authRouter);



export default appRouter;