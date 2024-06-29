import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './src/db.js';

const db = await connectToDB('postgresql:///captains');

class Ship extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Ship.init(
  {
    shipId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: 'ship',
    sequelize: db,
  },
);

class Captain extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Captain.init(
  {
    captainId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    skillLevel: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: 'captain',
    sequelize: db,
  },
);

// Define relationships
Ship.hasOne(Captain, {foreignKey: 'shipId'});
Captain.belongsTo(Ship, {foreignKey: 'shipId'})


// Create all tables (drop if already exist)
await db.sync({ force: true });

// Create objects and add to tables
const blackPearl = await Ship.create({ name: 'Black Pearl', type: 'pirate ship' });
const jollyRoger = await Ship.create({ name: 'Jolly Roger', type: 'pirate ship' });
const pequod = await Ship.create({ name: 'Pequod', type: 'whaler' });

const hook = await Captain.create({ name: 'James Hook', nationality: 'Never Land', skillLevel: 4 });
const ahab = await Captain.create({ name: 'Ahab', nationality: 'USA', skillLevel: 6 });
const jack = await Captain.create({ name: 'Jack Sparrow', nationality: 'England', skillLevel: 10 });


// Associate captains with ships
await hook.setShip(jollyRoger);
console.log('hook1');
console.log(hook);
await jack.setShip(blackPearl);
console.log('jack 1');
console.log(blackPearl);
await ahab.setShip(pequod);

// console.log(jack);
// console.log(await jack.getShip());
// console.log('\n');

async function showCaptainsEager() {
  const captains = await Captain.findAll({ include: Ship });
  console.log(captains);

  for (const capt of captains) {
    const ship = capt.ship;
    console.log(capt.name, capt.nationality, ship.name, ship.type);
  }
}

console.log('Captains and Ships:');
showCaptainsEager();

export { Captain, Ship };
