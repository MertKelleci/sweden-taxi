const knex = require("knex");

const connectedKnex = knex({
  client: "better-sqlite3",
  connection: {
    filename: "./SQL/userDB.sqlite3",
  },
  useNullAsDefault: true,
});

module.exports = connectedKnex;
