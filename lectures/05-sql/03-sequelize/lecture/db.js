import { Sequelize } from "sequelize";

async function connectToDB(dbURI) {
  console.log(`Connecting to DB: ${dbURI}`);

  const sequelize = new Sequelize(dbURI, {
    logging: false, // set logging: false to disable outputting SQL queries to console
    define: {
      timestamps: false, // don't want created_at or updated_at columns
      underscored: true // use snake_case rather than camelCase column names
    }
  });

  try {
    // promise
    await sequelize.authenticate();
    console.log('Connected to DB!')
  } catch (err) {
    // if err
    console.error('Unable to connect to db: ', err)
  }

  return sequelize;
}

export default connectToDB;