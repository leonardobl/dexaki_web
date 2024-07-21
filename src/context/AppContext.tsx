import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";
import { IAppContextprops } from "../@types/appContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../model/Product";

export const AppContext = createContext({} as IAppContextprops);

const initialValuesDelivery: IDataDeliveryUser = {
  name: '',
  email: '',
  phone: '',
  adress: undefined,
  typeOfpayment: undefined,
  delivery: undefined,
  products: [],
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery", initialValue: initialValuesDelivery })

  const total = useMemo(() => {
    return dataDelivery.products
      .map((i) => i.price * i.quantity)
      .reduce((acc, p) => acc + p, 0);
  }, [dataDelivery.products])

  const frete = 0.0;


  return (
    <AppContext.Provider
      value={{
        total,
        dataDelivery,
        setDataDelivery,
        frete
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
