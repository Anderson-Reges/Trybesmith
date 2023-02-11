import { Result } from '../interfaces/result.interface';
import { Iproduct, ProductWithoutId } from '../interfaces/products.interface';
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

  public async getProductById(id: number) {
    const result = await this.model.getProductById(id);

    return { type: null, data: result };
  }

  public async updateProduct(loggedId: number, productId: number) {
    const result = await this.model.updateProduct(loggedId, productId);

    return { type: null, data: result };
  }

  public async createProductWithOrderId(newProduct: ProductWithoutId) {
    const result = await this.model.createNewProductWithOrderId(newProduct);

    return { type: null, data: result };
  }

  public async createNewProduct(product: Iproduct): Promise<Result> {
    const result = await this.model.createNewProduct(product);

    return { type: null, data: result };
  }
}