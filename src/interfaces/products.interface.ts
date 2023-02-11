import { JwtPayload } from 'jsonwebtoken';

export interface Iproduct {
  name: string,
  amount: string,
}

export interface ProductId extends Iproduct {
  id: number
}

export interface ProductOrder extends ProductId {
  orderId: number | JwtPayload
}

export interface ProductWithoutId extends Iproduct {
  orderId: number | JwtPayload
}

export interface ProductIds {
  productsIds: Array<number>
}