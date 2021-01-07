require('dotenv').config({ path: process.env.NODE_ENV === 'test' ? './.test.env' : './.env' });

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { errors, notFound } = require('./middlewares/handler');
const modules = require('./module');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(modules);

app.use(notFound);
app.use(errors);

module.exports = app;
