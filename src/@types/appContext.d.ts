import { IDataDeliveryUser } from "../model/Product";

export interface IAppContextprops {
  dataDelivery: IDataDeliveryUser;
  setDataDelivery: (value: IDataDeliveryUser) => void;
  frete: number;
  isLoad: boolean;
  setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
}
