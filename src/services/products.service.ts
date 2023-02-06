import { Iproduct } from '../interfaces/products.interface';
import connection from '../models/connection';
import ProductModel from '../models/producst.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async createNewProduct(product: Iproduct) {
    const result = await this.model.createNewProduct(product);

    return { type: null, data: result };
  }
}