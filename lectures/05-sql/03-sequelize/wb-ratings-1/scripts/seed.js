import { Movie, Rating, User, db } from "../src/model.js";
import movieData from "./data/movies.json" assert { type: "json" };
import lodash from "lodash";

// console.log(movieData);
await db.sync({ force: true });
console.time('fast')

const moviesInDB = await Promise.all(
  movieData.map(async (movie) => {
    const { title, releaseDate, posterPath, overview } = movie;
    const formatDate = new Date(Date.parse(releaseDate));

    const newMovie = Movie.create({
      title,
      releaseDate: formatDate,
      posterPath,
      overview,
    });

    return newMovie;
  })
);

// console.log(moviesInDB);

// Users

const dummyUsers = [];
for (let i = 0; i < 10; i++) {
  const email = `user${i}@test.com`;
  dummyUsers.push(
    User.create({
      email,
      password: "test",
    })
  );
}

// console.log(dummyUsers);

const usersInDb = await Promise.all(dummyUsers);

// console.log(usersInDb);

// Ratings
// console.log(randomMovies);
const ratingInDB = await Promise.all(
  usersInDb.flatMap((user) => {
    const randomMovies = lodash.sampleSize(moviesInDB, 10);
    const movieRatings = randomMovies.map((movie) => {
      return Rating.create({
        score: lodash.random(1, 5),
        userId: user.userId,
        movieId: movie.movieId,
      });
    });
    return movieRatings;
  })
);

// console.log(ratingInDB);
console.timeEnd('fast')

await db.close()
