import { useMemo } from "react";
import { DataProducts } from "../../Mocks/productsMock";

export const useHome = () => {
  const products = useMemo(() => DataProducts, []);
  return { products };
};
