// import { IProductDTO } from "../types/product";

import { IProductDTO } from "../types/product";

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
  products: IProductDTO[];
  qr_code?: string;
}
