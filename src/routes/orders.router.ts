import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import auth from '../middlewares/auth';
import validateOrder from '../middlewares/validateOrder';

const orderController = new OrderController();

const router = Router();

router
  .get('/', orderController.getAllOrders)
  .post('/', auth, validateOrder, orderController.createOrder);

export default router;