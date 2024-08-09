// import { IProductDTO } from "../types/product";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  imagePath: string;
  category: string;
  comment?: string;
  quantity: number;
  discountCoupon?: number;
}

export interface IAdress {
  numero: number;
  rua: string;
  complemento: string;
  currentAdress: boolean;
}

export interface IDataDeliveryUser {
  name: string;
  email: string;
  phone: string;
  adress?: IAdress;
  typeOfpayment: string | undefined;
  delivery: string | undefined;
  products: IProduct[];
  qr_code?: string;
}
