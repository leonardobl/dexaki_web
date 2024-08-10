import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";

export const useStopWatch = () => {
  const navigate = useNavigate();
  const [dataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });

  return {
    navigate,
    dataDelivery,
  };
};
