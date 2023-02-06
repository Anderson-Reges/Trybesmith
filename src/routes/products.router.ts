import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productController = new ProductsController(); 

const router = Router();

router
  .get('/', productController.getAllProducts)
  .post('/', productController.creatNewProduct);

export default router;