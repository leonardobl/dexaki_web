import { useCallback, useEffect, useState } from "react";
import { Product } from "../../services/Product";
import { IParserProducts, IProductDTO } from "../../@types/product";

export const useHome = () => {
  const [products, setProducts] = useState<IProductDTO[]>([] as IProductDTO[]);
  const [dataProducts, setDataProducts] = useState<IParserProducts[]>(
    [] as IParserProducts[]
  );

  const getProducts = useCallback(() => {
    Product.get({ limit: 200 }).then(({ data }) => {
      setProducts(data.products);
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
    console.log(dataParser);

    setDataProducts(dataParser);
  }

  useEffect(() => {
    parseProducts(products);
  }, [products]);

  return { dataProducts };
};
