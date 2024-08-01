import lodash from 'lodash';
import { Movie, Rating, User, db } from '../src/model.js';
import movieData from './data/movies.json' assert { type: 'json' };

console.log('Syncing database...');
await db.sync({ force: true });

console.log('Seeding database...');

console.log('Creating movies...');
const moviesInDB = await Promise.all(
  movieData.map((movie) => {
    const releaseDate = new Date(Date.parse(movie.releaseDate));
    const { title, overview, posterPath } = movie;

    const newMovie = Movie.create({
      title: title,
      overview: overview,
      posterPath: posterPath,
      releaseDate: releaseDate,
    });

    return newMovie;
  }),
);

console.log('Creating users...');
const usersToCreate = [];
for (let i = 0; i < 10; i++) {
  const email = `user${i}@test.com`;
  usersToCreate.push(User.create({ email: email, password: 'test' }));
}

const usersInDB = await Promise.all(usersToCreate);

console.log('Creating ratings...');
await Promise.all(
  usersInDB.flatMap((user) => {
    // Get ten random movies
    const randomMovies = lodash.sampleSize(moviesInDB, 10);

    // Create a rating for each movie
    const movieRatings = randomMovies.map((movie) => {
      return Rating.create({
        score: lodash.random(1, 5),
        userId: user.userId,
        movieId: movie.movieId,
      });
    });

    return movieRatings;
  }),
);

await db.close();
console.log('Finished seeding database!');
