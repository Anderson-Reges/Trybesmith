import { Response, Request } from 'express';
import UserService from '../services/users.service';
import statusCodes from '../statusCodes';

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public createNewUser = async (req: Request, res: Response) => {
    const user = req.body;

    const { type, data } = await this.userService.createNewUser(user);

    return type !== null
      ? res.status(statusCodes.BAD_REQUEST).json(data)
      : res.status(statusCodes.CREATED).json(data);
  };

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const { type, data } = await this.userService.login(username, password);

    return type
      ? res.status(statusCodes.UNAUTHORIZED).json(data)
      : res.status(statusCodes.OK).json(data);
  };
}