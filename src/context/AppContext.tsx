import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IAppContextprops } from "../@types/appContext";
import { IDataGetProducts, IDataProducts } from "../Mocks/productsMock";

export const AppContext = createContext({} as IAppContextprops);

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IDataProducts[]>(
    [] as IDataProducts[]
  );

  const [bagProducts, setBagProducts] = useState<IDataGetProducts[]>(
    [] as IDataGetProducts[]
  );

  function addBagProduct(prod: IDataProducts) {
    setProducts((prev) => [...prev, prod]);
  }

  useEffect(() => {
    parserBagProducts();
  }, [products]);

  function parserBagProducts() {
    const ids = [...new Set(products.map((prod) => prod.id))];

    const parseProducts = ids.map((id) => {
      const quantity = products.filter((i) => i.id === id)?.length;
      return {
        ...products.find((i) => i.id === id),
        quantity,
      };
    });

    setBagProducts(parseProducts as IDataGetProducts[]);
  }

  return (
    <AppContext.Provider value={{ addBagProduct, bagProducts }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
