import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IuserWithId, IuserWithCredentials } from '../interfaces/user.interface';

export default class Users {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUserByUsernameAndPassword(
    username: string,
    password: string,
  ): Promise<IuserWithCredentials> {
    const [data] = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    
    const [user] = data as IuserWithCredentials[];
  
    return user;
  }

  public async createNewUser(newUser: IuserWithCredentials): Promise<IuserWithId> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
      [newUser.username, newUser.vocation, newUser.level, newUser.password],
    );

    const [rows] = result;
    return { 
      id: rows.insertId,
      username: newUser.username,
      vocation: newUser.vocation,
      level: newUser.level,
    };
  }
}