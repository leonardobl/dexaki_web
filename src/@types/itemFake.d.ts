import { ImageTypeEnum } from "../enums/imageType";
import { TypeRequestFakeAPIEnum } from "../enums/typeRequestFakeAPI";
import { IRequestFakeApi } from "./requestFakeApi";

export interface ItemProps extends IRequestFakeApi {
  query: TypeRequestFakeAPIEnum;
}

export interface IItemPageDTO {
  type: string;
  menuItems: IItemDTO[];
  offset: number;
  number: number;
  totalMenuItems: number;
  processingTimeMs: number;
}

export interface IItemDTO {
  id: number;
  title: string;
  image: string;
  imageType: ImageTypeEnum;
  restaurantChain: string;
  servings: IServings;
}

export interface IServings {
  number: number;
  size: number | null;
  unit: null | string;
}
