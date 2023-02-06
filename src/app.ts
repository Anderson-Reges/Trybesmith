import express from 'express';
import { productsRouter } from './routes/index';

const app = express();

app
  .use(express.json())
  .use('/products', productsRouter);

export default app;
