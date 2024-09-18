import { useCallback, useEffect, useState } from "react";
import { IParserProducts, IProductDTO } from "../../types/product";
import { useAppContext } from "../../context/AppContext";
import { DataProducts } from "../../Mocks/productsMock";
import { Product } from "../../Services/Product";
import { toast } from "react-toastify";

export const useHome = () => {
  const [products, setProducts] = useState<IProductDTO[]>([] as IProductDTO[]);
  const [dataProducts, setDataProducts] = useState<IParserProducts[]>(
    [] as IParserProducts[]
  );
  const { setIsLoad } = useAppContext();

  const getProducts = useCallback(() => {
    setIsLoad(true);
    setProducts(DataProducts);
    setIsLoad(false);
    Product.getByCompanyName({ companyName: "Dexaki" })
      .then(({ data }) => {
        console.log(data);
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
        products?.map((p) =>
          JSON.stringify({
            name: p.category.name,
            icon: p.category.icon,
          })
        )
      ),
    ]?.map((i) => JSON.parse(i));

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
