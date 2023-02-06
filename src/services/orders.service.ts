import connection from '../models/connection';
import Orders from '../models/orders.model';

export default class OrderService {
  public model: Orders;

  constructor() {
    this.model = new Orders(connection);
  }

  public async getAll() {
    const result = await this.model.getAllOrders();

    return { type: null, data: result };
  }
}