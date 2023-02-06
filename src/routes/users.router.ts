import { Router } from 'express';
import UserController from '../controllers/users.controller';

const userController = new UserController();

const router = Router();

router
  .post('/', userController.createNewUser);

export default router;