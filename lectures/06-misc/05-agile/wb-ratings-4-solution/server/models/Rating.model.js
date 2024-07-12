import { DataTypes, Model } from 'sequelize';
import util from 'util';

import { db } from '../config/db.js';

export default class Rating extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Rating.init(
  {
    ratingId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: 'rating',
    sequelize: db,
    timestamps: true,
    updatedAt: false,
  },
);