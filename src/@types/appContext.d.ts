import { IDataDeliveryUser } from "../model/Product";

export interface IAppContextprops {
  total: number;
  dataDelivery: IDataDeliveryUser;
  setDataDelivery: (value: IDataDeliveryUser) => void;
  frete: number;
  isLoad: boolean;
  setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
}
