import { useCallback, useEffect, useState } from "react";
import { Product } from "../../services/Product";
import { IParserProducts, IProductDTO } from "../../@types/product";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

export const useHome = () => {
  const [products, setProducts] = useState<IProductDTO[]>([] as IProductDTO[]);
  const [dataProducts, setDataProducts] = useState<IParserProducts[]>(
    [] as IParserProducts[]
  );
  const { setIsLoad } = useAppContext();

  const getProducts = useCallback(() => {
    setIsLoad(true);
    Product.get({ limit: 200 })
      .then(({ data }) => {
        setProducts(data.products);
      })
      .catch((erro) => {
        toast.error(erro);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  function parseProducts(products: IProductDTO[]) {
    const categorys = [
      ...new Set(
        products.map((p) =>
          JSON.stringify({
            name: p.category.name,
            icon: p.category.icon,
          })
        )
      ),
    ].map((i) => JSON.parse(i));

    const dataParser = categorys.map((c) => {
      return {
        category: c,
        products: products.filter((p) => p.category.name === c.name),
      };
    });

    setDataProducts(dataParser);
  }

  useEffect(() => {
    parseProducts(products);
  }, [products]);

  return { dataProducts };
};
