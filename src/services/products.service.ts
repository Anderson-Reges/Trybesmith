import { Result } from '../interfaces/result.interface';
import { Iproduct } from '../interfaces/products.interface';
import connection from '../models/connection';
import ProductModel from '../models/products.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAllProducts(): Promise<Result> {
    const result = await this.model.getAll();

    return { type: null, data: result };
  }

  public async createNewProduct(product: Iproduct): Promise<Result> {
    const result = await this.model.createNewProduct(product);

    return { type: null, data: result };
  }
}