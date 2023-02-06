import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import statusCodes from '../statusCodes';

export default class ProductsController {
  constructor(private productService = new ProductService()) {}

  public getAllProducts = async (req: Request, res: Response) => {
    const { type, data } = await this.productService.getAllProducts();

    return type !== null 
      ? res.status(statusCodes.BAD_REQUEST).json(data)
      : res.status(statusCodes.OK).json(data);
  };

  public creatNewProduct = async (req: Request, res: Response) => {
    const product = req.body;

    const { type, data } = await this.productService.createNewProduct(product);

    return type !== null 
      ? res.status(statusCodes.BAD_REQUEST).json(data)
      : res.status(statusCodes.CREATED).json(data);
  };
}