export interface IProducts {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
  category: string;
}

export interface IProductsCart extends IProducts {
  quantity: number;
  discountCoupon: number
}

export interface IDataDeliveryUser {
  name: string
  email: string,
  phone: string,
  adress: string,
  typeOfpayment: 'card' | 'pix' | 'money',
  delivery: boolean,
  products: IProductsCart[]
}