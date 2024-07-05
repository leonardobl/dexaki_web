import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataProducts, IDataProducts } from "../../Mocks/productsMock";

export const useProduct = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [price] = useState(15.0);
  const [total, setTotal] = useState(price ?? 0);
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const [product, setProduct] = useState<IDataProducts>({} as IDataProducts);

  useEffect(() => {
    if (id) {
      const prod = DataProducts.find((i) => i.id === id) as IDataProducts;
      setProduct(prod);
    }
  }, [id]);

  return {
    navigate,
    showModal,
    setShowModal,
    total,
    setTotal,
    quantity,
    setQuantity,
    price,
    product,
  };
};
