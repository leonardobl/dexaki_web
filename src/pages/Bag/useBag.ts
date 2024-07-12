import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";

const userDelivery: IDataDeliveryUser = {
  name: '',
  email: '',
  phone: '',
  adress: '',
  typeOfpayment: 'money',
  delivery: true,
  products: []
}

export const useBag = () => {
  const [dataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery", initialValue: userDelivery })
  const navigate = useNavigate();

  const total = dataDelivery.products
    .map((i) => i.price * i.quantity)
    .reduce((acc, p) => acc + p, 0);

  const frete = 5.5;

  const { handleCleanBag } = useAppContext();

  return { navigate, dataDelivery, total, frete, handleCleanBag };
};
