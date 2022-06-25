import express from 'express';
import { config } from './config.js';

const app = express();

app.get('/test', (req, res, next) => {
  console.log('hello');
  res.status(200).json({ text: 'hello world!' });
});

app.listen(config.host.port);
