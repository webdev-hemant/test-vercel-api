const { Sequelize } = require("sequelize");
const pg = require('pg')
const {
  DB: { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME },
  NODE_ENV,
} = require("./allEnv");

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  dialectModule: pg,
  logging: false,
  dialectOptions: {
    ssl:
      NODE_ENV === "PROD"
        ? {
            require: true,
            rejectUnauthorized: false,
          }
        : false,
  },
});

module.exports = sequelize;
