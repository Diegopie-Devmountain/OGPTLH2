import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './src/db.js';

const db = await connectToDB('postgresql:///genres');

class Book extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Book.init(
  {
    bookId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'book',
    sequelize: db,
  },
);

class Genre extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Genre.init(
  {
    genreId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'genre',
    sequelize: db,
  },
);

class BookGenre extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
};

BookGenre.init({
  bookGenId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  modelName: 'book_genre',
  sequelize: db
})

// const BookGenre = db.define({}, 'book_genre');

// Define many-to-many relationship
Genre.belongsToMany(Book, {
  through: BookGenre,
  foreignKey: {name: 'bookId', field:'book_id'}
});

Book.belongsToMany(Genre, {
  through: BookGenre,
  foreignKey: {name: 'genreId', field: 'genre_id'}
});

// Create tables (drop if they already exist)
await db.sync({ force: true });

// Create some data
const lotr = await Book.create({ title: 'Lord of the Rings' });

const treasureIsland = await Book.create({ title: 'Treasure Island' });
const fantasy = await Genre.create({ name: 'Fantasy' });
const adventure = await Genre.create({ name: 'Adventure' });

await lotr.addGenre(fantasy);
await lotr.addGenre(adventure);
const lotrGen = await lotr.getGenres();
console.log(lotrGen);
await adventure.addBook(treasureIsland);


// console.log(lotrGen);

const adventureBooks = await adventure.getBooks()
console.log(adventureBooks);

await db.close()
export { Book, Genre };
