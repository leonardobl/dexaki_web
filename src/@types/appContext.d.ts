import { IDataGetProducts, IDataProducts } from "../Mocks/productsMock";

export interface IAppContextprops {
  bagProducts: IDataGetProducts[];
  addBagProduct: (prod: IDataProducts) => void;
  handleRemoveBagItem: (id: string) => void;
  handleCleanBag: () => void;
}
