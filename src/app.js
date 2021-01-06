require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? './.test.env' : './.env' });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { errorHandler, notFoundHandler } = require('./middlewares/handlers');
const modules = require('./module');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(modules);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
