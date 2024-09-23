import { ICategoryDTO } from "./category";
import { IImageDTO } from "./image";
import { IngredientDTO } from "./ingredient";
import { IPageRequest } from "./pagination";

export interface IPageProductDTO {
  content: IProductDTO[];
  numberPage: number;
  size: number;
  totalElements: number;
  totalPages: number;
  next: boolean;
}

export interface IProductDTO {
  id: string;
  category: ICategoryDTO;
  description: string;
  image: IImageDTO;
  ingredients: IngredientDTO[];
  name: string;
  price: number;
}

export interface ISelectedProducts {
  _id: string;
  name: string;
  quantity: number;
  comment?: string;
}

export interface IParserProducts {
  category: ICategoryDTO;
  products: IProductDTO[];
}
export interface IParserCategory {
  name: string;
  icon: string;
}

export interface IProductByCompanyProps extends IPageRequest {
  companyName: string;
}
