import express from 'express';
import { productsRouter, usersRouter } from './routes/index';

const app = express();

app
  .use(express.json())
  .use('/products', productsRouter)
  .use('/users', usersRouter);

export default app;
