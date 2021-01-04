require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? './.test.env' : './.env' });

const express = require('express');

const router = require('./router');
const handlers = require('./handlers');

const app = express();

app.use(require('cors')());
app.use(require('helmet')());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(handlers.notFound);
app.use(handlers.error);

module.exports = app;
