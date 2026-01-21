const { neon } = require('@neondatabase/serverless');
  require('dotenv').config();

// Create Neon serverless SQL function
const sql = neon(process.env.DATABASE_URL);

module.exports = sql;