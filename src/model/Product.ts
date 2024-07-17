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

export interface IAdress {
  numero: number,
  rua: string,
  complemento: string,
  currentAdress: boolean,
}

export interface IDataDeliveryUser {
  name: string
  email: string,
  phone: string,
  adress?: IAdress,
  typeOfpayment: 'card' | 'pix' | 'money',
  delivery: boolean,
  products: IProductsCart[]
}