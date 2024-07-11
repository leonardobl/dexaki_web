import { IDataGetProducts } from "../../Mocks/productsMock";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const useBagItem = () => {
  const [bagProductsStorage, setBagproductsStorage] = useLocalStorage({
    storageKey: "bagProducts",
  });

  function handleUpdateQuantity(item: IDataGetProducts) {
    const temp: IDataGetProducts = {
      ...item,
      quantity: item.quantity >= 99 ? 99 : item.quantity + 1,
    };

    const newValues = bagProductsStorage?.map((i: IDataGetProducts) => {
      return i.id === temp.id ? temp : i;
    });

    setBagproductsStorage(newValues);
  }

  return { handleUpdateQuantity };
};
