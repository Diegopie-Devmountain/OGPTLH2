import { Movie, Rating, User, db } from "../src/model.js";
import movieData from "./data/movies.json" assert { type: "json" };
import lodash from "lodash";

// console.log(movieData);
await db.sync({ force: true });

console.time("slow");

const moviesInDB = [];
// await Promise.all(
for (const movie of movieData) {
  const { title, releaseDate, posterPath, overview } = movie;
  const formatDate = new Date(Date.parse(releaseDate));

  const newMovie = await Movie.create({
    title,
    releaseDate: formatDate,
    posterPath,
    overview,
  });

  // console.log(newMovie);

  moviesInDB.push(newMovie);
}
// );

// console.log(moviesInDB);

// Users

const usersInDb = [];
for (let i = 0; i < 10; i++) {
  const email = `user${i}@test.com`;
  usersInDb.push(
    await User.create({
      email,
      password: "test",
    })
  );
}

const ratingInDB = [];
for (const user of usersInDb) {
  const randomMovies = lodash.sampleSize(moviesInDB, 10);
  for (const movie of randomMovies) {
    const newRating = await Rating.create({
      score: lodash.random(1, 5),
      userId: user.userId,
      movieId: movie.movieId,
    });
    ratingInDB.push(newRating);
  }
}

// console.log(ratingInDB);

console.timeEnd("slow");

await db.close();
