export interface Iproduct {
  name: string,
  amount: string,
}

export interface ProductId extends Iproduct {
  id: number
}

export interface ProductOrder extends ProductId {
  orderId: number
}
