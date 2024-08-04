import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ISelectedProducts } from "../../@types/product";

export const useOrders = () => {
  const navigate = useNavigate();
  const [dataDelivery] = useLocalStorage<ISelectedProducts[]>({
    storageKey: "@delivery",
  });

  return {
    navigate,
    dataDelivery,
  };
};
