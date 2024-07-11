import { IDataGetProducts, IDataProducts } from "../../Mocks/productsMock";
import { useLocalStorage } from "./../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const useMenuItem = () => {
  const navigate = useNavigate();
  const [bagProductsStore, setBagProductsStore] = useLocalStorage<
    IDataGetProducts[]
  >({
    storageKey: "bagProductsStore",
    initialValue: [],
  });

  function addItem(item: IDataProducts) {
    const temp = [...bagProductsStore];
    if (temp?.length) {
      const newValues = temp.map((i: IDataGetProducts) => {
        return i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : { ...item, quantity: 1 };
      });
      setBagProductsStore(newValues);
      return;
    }
    setBagProductsStore([{ ...item, quantity: 1 }]);
  }

  return { navigate, addItem };
};
