import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Iuser, IuserWithId } from '../interfaces/user.interface';

export default class Users {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createNewUser(newUser: Iuser): Promise<IuserWithId> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
      [newUser.username, newUser.vocation, newUser.level, newUser.password],
    );

    const [rows] = result;
    return { id: rows.insertId, ...newUser };
  }
}