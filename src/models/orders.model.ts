import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IordersWithUserId, Iorders } from '../interfaces/orders.interface';

export default class Orders {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<IordersWithUserId[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      JOIN (
        SELECT *
          FROM Trybesmith.products
      ) AS p 
      ON o.id = p.order_id
      GROUP BY o.id`,
    );

    const [rows] = result;
    return rows as IordersWithUserId[];
  }

  public async createOrder(id: Iorders): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [id],
    );
    const [rows] = result;
    return rows.insertId;
  }
}