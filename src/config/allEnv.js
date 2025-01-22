require("dotenv").config();

const CURRENT_HOST = process.env.CURRENT_HOST;
const SERVER_PORT = process.env.SERVER_PORT;
const NODE_ENV = process.env.NODE_ENV;
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

const DB = {
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_URL: process.env.DB_URL,
};

module.exports = {
  CURRENT_HOST,
  SERVER_PORT,
  NODE_ENV,
  JWT_SECRET,
  ADMIN_EMAIL,
  DB,
};
