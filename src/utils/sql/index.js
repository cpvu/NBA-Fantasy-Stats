require('dotenv').config();
const { useQuery } = require('@chakra-ui/react');
const mysql = require('mysql');
const crypto = require('node:crypto');

class MySql {
  constructor(connectionConfig) {
    this.sql = mysql.createConnection(connectionConfig);
    this.queries = [];
  }

  connect() {
    return new Promise((resolve, reject) => {
      this.sql.connect((err) => {
        return err ? reject(err) : resolve(this.sql.threadId)
      })
    })
  }

  end() {
    this.queries.forEach(query => {
      if (query.status === 'pending') {
        console.log("still pending")
        return;
      }
    })
    this.sql.end();
  }

  addToQuery(query) {
    this.queries.push({
      status: 'pending',
      id: crypto.randomBytes(4).toString("hex"),
      method: query
    })
  }

  useQuery(queryMethod) {
    this.sql.query(queryMethod, (err, results, fields) => {
      if (err) throw err;
      console.log(results);
    })
  }
}

(async () => {
  const sql = new MySql({
    host: process.env.HEROKU_HOST,
    user: process.env.HEROKU_USER,
    password: process.env.HEROKU_PASS,
    database: process.env.HEROKU_DB,
    multipleStatements: false
  })

  await sql.connect();
  sql.useQuery(`
    select *
    from players_total_game_stats
    where Pos = "PG/SG";
  `);
  sql.end()

})();

module.exports = MySql;
