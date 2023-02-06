import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { config } from '../interfaces/token.interface';
import { Result } from '../interfaces/result.interface';
import { Iuser } from '../interfaces/user.interface';
import connection from '../models/connection';
import Users from '../models/users.model';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export default class UserService {
  public model: Users;

  constructor() {
    this.model = new Users(connection);
  }

  public async createNewUser(user: Iuser): Promise<Result> {
    const result = await this.model.createNewUser(user);

    const token = sign(result, secret, config);
    return { type: null, data: { token } };
  }
}