import Movie from "./Movie.model.js";
import Rating from "./Rating.model.js";
import User from "./User.model.js";

Movie.hasMany(Rating, { foreignKey: 'movieId' });
Rating.belongsTo(Movie, { foreignKey: 'movieId' });

User.hasMany(Rating, { foreignKey: 'userId' });
Rating.belongsTo(User, { foreignKey: 'userId' });


export { Movie, Rating, User };