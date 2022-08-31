'use strict';

const express = require('express');
const { Pool } = require('pg')

// Express config
const PORT = 3000;
const HOST = '0.0.0.0';

// Database
const pool = new Pool();

// App
const app = express();
app.get('/', (req, res) => {
  
  pool.query('SELECT NOW() as current_time').then((data) => {
    res.send('Time from Postgres: ' + data.rows[0]["current_time"]);
  }).catch((err) => {
    res.send('Connection error: ' + err);
  });

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);