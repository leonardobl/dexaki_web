import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { Product } from "../../services/Product";
import { toast } from "react-toastify";
import { IProductDTO, ISelectedProducts } from "../../@types/product";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const useProduct = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<ISelectedProducts[]>({
    storageKey: "@delivery",
    initialValue: [],
  });
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState<number>(0);
  const { id } = useParams();
  const [product, setProduct] = useState<IProductDTO>({} as IProductDTO);
  const { setIsLoad } = useAppContext();
  const [comment, setComment] = useState("");

  function addToCart() {
    setShowModal(true);

    if (dataDelivery?.some((i) => i._id === id)) {
      const dataUpdated = dataDelivery.map((p) => {
        return p._id === id ? { ...p, quantity } : p;
      });

      setDataDelivery(dataUpdated);

      return;
    }

    setDataDelivery([
      ...dataDelivery,
      { _id: product._id, name: product.name, quantity },
    ]);
  }

  function addQuantity() {
    setQuantity((prev) => {
      if (dataDelivery?.some((i) => i._id === id)) {
        const updatedValues = dataDelivery.map((i) =>
          i._id === id ? { ...i, quantity: prev + 1 } : i
        );
        setDataDelivery(updatedValues);
      }

      return prev + 1;
    });
  }

  function lessQuantity() {
    setQuantity((prev) => {
      if (prev > 0) {
        if (dataDelivery?.some((i) => i._id === id)) {
          const updatedValues = dataDelivery.map((i) =>
            i._id === id ? { ...i, quantity: prev - 1 } : i
          );
          setDataDelivery(updatedValues);
        }

        if (prev - 1 === 0 && dataDelivery?.some((i) => i._id === id)) {
          const updatedValues = dataDelivery.filter((i) => i._id !== id);
          setDataDelivery(updatedValues);
        }

        return prev - 1;
      }

      return 0;
    });
  }

  function goBack() {
    navigate("/");
  }

  useEffect(() => {
    if (comment && dataDelivery?.some((i) => i._id === id)) {
      const updatedValues = dataDelivery.map((i) =>
        i._id === id ? { ...i, comment } : i
      );
      setDataDelivery(updatedValues);
    }
  }, [comment]);

  useEffect(() => {
    if (!id) return;

    setIsLoad(true);
    Product.getById(id)
      .then(({ data }) => {
        setProduct(data);
      })
      .catch((error) => toast.error(error))
      .finally(() => {
        setIsLoad(false);
      });

    if (dataDelivery?.some((i) => i._id === id)) {
      const product = dataDelivery.find((i) => i._id === id);
      setQuantity(product!.quantity);
      setComment(product?.comment || "");
    }
  }, [id]);

  return {
    addToCart,
    addQuantity,
    lessQuantity,
    goBack,
    navigate,
    showModal,
    setShowModal,
    quantity,
    setQuantity,
    product,
    comment,
    setComment,
  };
};
