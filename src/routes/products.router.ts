import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const productController = new ProductsController(); 

const router = Router();

router
  .post('/', productController.creatNewProduct);

export default router;