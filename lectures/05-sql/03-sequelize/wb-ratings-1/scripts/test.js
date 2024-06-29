import { User, Movie, db, Rating } from "../src/model.js";

await db.sync({force:true});

const testUser = await User.create({
  email: 'test@email.com',
  password: 'Password123',
})

// console.log(testUser);


const movie = await Movie.create({
  title: 'Test Movie'
})

// console.log(movie);

const rating = await Rating.create({
  score: 5
});
// console.log(rating);


const testUserRating = await testUser.createRating({
  score: 5,
  movieId: movie.movieId
});
await testUser.createRating({
  score: 4,
  movieId: movie.movieId
});
await testUser.createRating({
  score: 1,
  movieId: movie.movieId
});
await testUser.createRating({
  score: 3,
  movieId: movie.movieId
});
await testUser.createRating({
  score: 4,
  movieId: movie.movieId
});
await testUser.createRating({
  score: 1,
  movieId: movie.movieId
});

console.log(testUserRating);

console.log(await movie.getRatings());



















































await db.close()