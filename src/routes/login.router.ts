import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateLoginValues from '../middlewares/validateLogin';

const userController = new UserController();

const router = Router();

router
  .post('/', validateLoginValues, userController.login);

export default router;