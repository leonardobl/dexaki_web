import { IDataGetProducts, IDataProducts } from "../../Mocks/productsMock";
import { useLocalStorage } from "./../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const useMenuItem = () => {
  const navigate = useNavigate();
  const [bagProductsStore, setBagProductsStore] = useLocalStorage<
    IDataGetProducts[]
  >({
    storageKey: `bagProductsStore`,
    initialValue: [],
  });

  function addItem(item: IDataProducts) {
    const oldValues = [...bagProductsStore];

    const hasItem = oldValues.some((prod) => prod.id === item.id);

    if (hasItem) {
      const newValues = oldValues.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
      );

      setBagProductsStore(newValues as IDataGetProducts[]);

      return;
    }

    setBagProductsStore([...bagProductsStore, { ...item, quantity: 1 }]);
  }

  return { navigate, addItem };
};
