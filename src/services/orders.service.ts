import { JwtPayload } from 'jsonwebtoken';
import { ProductIds } from '../interfaces/products.interface';
import connection from '../models/connection';
import Orders from '../models/orders.model';
import ProductService from './products.service';

export default class OrderService {
  public model: Orders;

  public productService: ProductService;

  constructor() {
    this.model = new Orders(connection);
    this.productService = new ProductService();
  }

  public async getAll() {
    const result = await this.model.getAllOrders();

    return { type: null, data: result };
  }

  public async createOrder(arrayIds: ProductIds, loggedUserId: JwtPayload) {
    const { productsIds } = arrayIds;
    const orderId = await this.model.createOrder(loggedUserId.id);
    
    productsIds.forEach(async (id) => {
      const { data } = await this.productService.getProductById(id);
      const newProduct = {
        name: data.name, amount: data.amount, orderId,
      };

      if (data.orderId === undefined) {
        await this.productService.updateProduct(orderId, data.id);
      }

      await this.productService.createProductWithOrderId(newProduct);
    });

    const result = {
      userId: loggedUserId.id,
      productsIds,
    };

    return { type: null, data: result };
  }
}