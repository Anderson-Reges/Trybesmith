import { Router } from 'express';
import UserController from '../controllers/users.controller';
import validateNewUser from '../middlewares/validateUser';

const userController = new UserController();

const router = Router();

router
  .post('/', validateNewUser, userController.createNewUser);

export default router;