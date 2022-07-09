import express from 'express';
import { config } from './config.js';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.listen(config.host.port);
