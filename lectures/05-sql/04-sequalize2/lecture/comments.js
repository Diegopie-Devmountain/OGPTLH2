import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './src/db.js';

const db = await connectToDB('postgresql:///comments');

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'user',
    sequelize: db,
  },
);

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

class Comment extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Comment.init({
  commentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  body: {
    type: DataTypes.TEXT
  }
}, {
  modelName: 'comment',
  sequelize: db
})

Book.hasMany(Comment, {foreignKey: 'bookId'});
Comment.belongsTo(Book, {foreignKey: 'bookId'});

User.hasMany(Comment, {foreignKey: 'userId'});
Comment.belongsTo(User, {foreignKey: 'userId'});

await db.sync({force:true})

// Create some data
const jane = await User.create({ email: 'jane@jhacks.com' });
const fred = await User.create({ email: 'fred@mail.com' });

const hamlet = await Book.create({ title: 'Hamlet' });

const comment1 = await Comment.create({
  userId: jane.userId,
  bookId: hamlet.bookId,
  body: 'Too long, no pics'
});


// console.log(hamComments);

const comment2 = await Comment.create({body: 'Some Text'});
// await comment2.setUser(jane);
// await comment2.setBook(hamlet);

// console.log(comment2);

const comment3 = await Comment.create({body: 'Mour Text'});

await fred.addComment(comment3);
await hamlet.addComment(comment3)


const hamComments = await hamlet.getComments();
const fredComments = await fred.getComments();


console.log(comment3);


console.log(hamComments);
console.log(fredComments);

await db.close()

export { Book, Comment, User };
