import { Pool, ResultSetHeader } from 'mysql2/promise';
import {
  Iproduct, ProductId,
  ProductOrder, ProductWithoutId,
} from '../interfaces/products.interface';

export default class Products {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<ProductOrder[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    const [rows] = result;
    return rows as ProductOrder[];
  }

  public async getProductById(productId: number): Promise<ProductOrder> {
    const [result] = await this.connection.execute(
      'SELECT * FROM Trybesmith.products WHERE id = ?',
      [productId],
    );

    const [user] = result as ProductOrder[];
  
    return user;
  }

  public async createNewProduct(product: Iproduct): Promise<ProductId> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)',
      [product.name, product.amount],
    );
    const [rows] = result;
    return { id: rows.insertId, ...product };
  }

  public async createNewProductWithOrderId(product: ProductWithoutId): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount, order_id) VALUES (?,?,?)',
      [product.name, product.amount, product.orderId],
    );
    const [rows] = result;
    return rows.insertId;
  }

  public async updateProduct(orderId: number, productId: number): Promise<number> {
    const result = await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
      [orderId, productId],
    );

    const [rows] = result;
    return rows.affectedRows;
  }
}