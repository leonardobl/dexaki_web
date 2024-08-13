import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";

const userDelivery: IDataDeliveryUser = {
  name: "",
  email: "",
  phone: "",
  adress: undefined,
  typeOfpayment: undefined,
  delivery: undefined,
  products: [],
};

export const useNav = () => {
  const [dataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
    initialValue: userDelivery,
  });
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const temp = dataDelivery.products
      ?.map((i) => i.price * i.quantity)
      .reduce((acc, price) => acc + price, 0);

    setTotal(temp);
  }, [dataDelivery]);

  return { navigate, total, dataDelivery };
};
