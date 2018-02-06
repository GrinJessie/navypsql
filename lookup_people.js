const pg = require('pg');
const settings = require('./settings');
const input = process.argv[2];
const printMatchList = require('./data-processor')(input);
const query = `SELECT * FROM famous_people WHERE first_name LIKE '%${input}%' OR last_name LIKE '%${input}%'`;

const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});

client.connect((err) =>{
    if (err) {
        return console.error(err);
    }

    client.query(query, (err, result) => {
        if (err) {
            return console.error('error running query', err);
        }
        printMatchList(result);
    })
})