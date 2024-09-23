import { useCallback, useEffect, useState } from "react";
import { IParserProducts, IProductDTO } from "../../types/product";
import { useAppContext } from "../../context/AppContext";
// import { DataProducts } from "../../Mocks/productsMock";
import { Product } from "../../Services/Product";
import { toast } from "react-toastify";

export const useHome = () => {
  const [products, setProducts] = useState<IParserProducts[]>(
    [] as IParserProducts[]
  );
  const { setIsLoad } = useAppContext();

  const getProducts = useCallback(() => {
    setIsLoad(true);

    setIsLoad(false);
    Product.getByCompanyName({ companyName: "Dexaki" })
      .then(({ data }) => {
        parserProducts(data.content);
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

  function parserProducts(products: IProductDTO[]) {
    const tempCategories = products.map((p) => JSON.stringify(p?.category));

    const categoriesUniques = [...new Set(tempCategories)].map((c) =>
      JSON.parse(c)
    );

    const customProducts = categoriesUniques.map((c) => {
      return {
        category: c,
        products: products.filter((p) => p?.category?.id === c?.id),
      };
    });

    setProducts(customProducts);
  }

  return { products };
};
