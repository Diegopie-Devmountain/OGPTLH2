import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import url from 'url';
import util from 'util';

const db = await connectToDB("postgresql:///employees");

class Departments extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

Departments.init(
  {
    deptCode: {
      type: DataTypes.STRING(5),
      primaryKey: true,
    },
    deptName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Department",
  }
);

class Employees extends Model {

  [util.inspect.custom]() {
    return this.toJSON()
  }

}

Employees.init(
  {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  state: {
    type: DataTypes.STRING(2),
    allowNull: false,
    defaultValue: "UT",
  },
  salary: {
    type: DataTypes.INTEGER,
  },
}, 
{
  modelName: 'employee',
  sequelize: db
}
);

//param1: table to link
// param2: foreign key
Departments.hasMany(Employees, { foreignKey: 'deptCode' });
Employees.belongsTo(Departments, {foreignKey: 'deptCode'});

// console.log(process.argv[1]);
// console.log(url.fileURLToPath(import.meta.url));

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log('Syncing database...');
  await db.sync();
  console.log('Finished syncing db!');
}

export { Departments, Employees, db }