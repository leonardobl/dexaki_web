import { ICategoryDTO } from "./category";
import { IIngredient } from "./ingredient";

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
  ingredients: IIngredient[];
  category: ICategoryDTO;
  __v: number;
}

export interface IParserProducts {
  category: IParserCategory;
  products: IProductDTO[];
}
export interface IParserCategory {
  name: string;
  icon: string;
}
