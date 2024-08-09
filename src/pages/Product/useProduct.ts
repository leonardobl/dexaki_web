import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { Product } from "../../services/Product";
import { toast } from "react-toastify";
import { IProductDTO } from "../../types/product";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser, IProduct } from "../../model/Product";

const userDelivery: IDataDeliveryUser = {
  name: "",
  email: "",
  phone: "",
  adress: undefined,
  typeOfpayment: undefined,
  delivery: undefined,
  products: [],
};

export const useProduct = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
    initialValue: userDelivery,
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
    const alreadyExistProduct = dataDelivery.products.some(
      (p) => p.id === product._id
    );

    if (alreadyExistProduct) {
      const updateProducts = dataDelivery.products.map((p: IProduct) =>
        p.id === product._id ? { ...p, quantity: p.quantity + quantity } : p
      );

      setDataDelivery({
        ...dataDelivery,
        products: updateProducts,
      });
    } else {
      setDataDelivery({
        ...dataDelivery,
        products: [
          ...dataDelivery.products,
          {
            id: product._id,
            category: product.category._id,
            description: product.description,
            imagePath: product.imagePath,
            name: product.name,
            price: product.price,
            quantity: quantity,
            discountCoupon: 0,
          },
        ],
      });
    }
  }
  function addQuantity() {
    setQuantity(quantity + 1);
  }

  function lessQuantity() {
    if (quantity == 1) {
      return;
    }

    setQuantity((prevState) => {
      if (prevState == 0) return 0;
      return prevState - 1;
    });
  }

  function goBack() {
    navigate("/");
  }

  // useEffect(() => {
  //   if (
  //     comment &&
  //     Array.isArray(dataDelivery) &&
  //     dataDelivery?.some((i) => i._id === id)
  //   ) {
  //     const updatedValues = dataDelivery?.map((i) =>
  //       i._id === id ? { ...i, comment } : i
  //     );
  //     setDataDelivery(updatedValues);
  //   }
  // }, [comment]);

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

    if (
      Array.isArray(dataDelivery) &&
      dataDelivery?.some((i) => i._id === id)
    ) {
      const product = dataDelivery?.find((i) => i._id === id);
      setQuantity(product!.quantity);
      setComment(product?.comment || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
