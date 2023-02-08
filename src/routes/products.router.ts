import { Router } from 'express';
import validateProductValues from '../middlewares/validateProducts';
import ProductsController from '../controllers/products.controller';

const productController = new ProductsController(); 

const router = Router();

router
  .get('/', productController.getAllProducts)
  .post('/', validateProductValues, productController.creatNewProduct);

export default router;