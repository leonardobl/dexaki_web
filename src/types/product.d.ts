import { IPageRequest } from "./pagination";

export interface IPageProduct {
  products: IProductDTO[];
  pagination: IPagination;
}

export interface IProductDTO {
  _id: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: string[];
  category: ICategory;
  __v: number;
}

export interface ISelectedProducts {
  _id: string;
  name: string;
  quantity: number;
  comment?: string;
}

export interface IParserProducts {
  category: IParserCategory;
  products: IProductDTO[];
}
export interface IParserCategory {
  name: string;
  icon: string;
}

export interface IProductByCompanyProps extends IPageRequest {
  companyName: string;
}
