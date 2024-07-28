import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import { IDataDeliveryUser, IProductsCart } from "../../model/Product";
import { useAppContext } from "../../context/AppContext";
import { Product } from "../../services/Product";
import { toast } from "react-toastify";
import { IProductDTO } from "../../@types/product";

// const userDelivery: IDataDeliveryUser = {
//   name: "",
//   email: "",
//   phone: "",
//   adress: undefined,
//   typeOfpayment: undefined,
//   delivery: undefined,
//   products: [],
// };

export const useProduct = () => {
  // const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
  //   storageKey: "@delivery",
  //   initialValue: userDelivery,
  // });
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const [product, setProduct] = useState<IProductDTO>({} as IProductDTO);
  const [price] = useState(0);
  const [total, setTotal] = useState(0);
  const { setIsLoad } = useAppContext();

  function addToCart() {
    // setShowModal(true);
    // const alreadyExistProduct = dataDelivery.products.some(
    //   (p) => p._id === product._id
    // );
    // if (alreadyExistProduct) {
    //   const updateProducts = dataDelivery.products.map((p: IProductsCart) =>
    //     p.id === product._id ? { ...p, quantity: p.quantity + quantity } : p
    //   );
    //   setDataDelivery({
    //     ...dataDelivery,
    //     products: updateProducts,
    //   });
    // } else {
    //   setDataDelivery({
    //     ...dataDelivery,
    //     products: [
    //       ...dataDelivery.products,
    //       {
    //         _id: product._id,
    //         category: product.category,
    //         description: product.description,
    //         imagePath: product.imagePath,
    //         name: product.name,
    //         price: product.price,
    //         quantity: quantity,
    //         discountCoupon: 0,
    //       },
    //     ],
    //   });
    // }
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
    setTotal(quantity * price);
  }

  function goBack() {
    navigate("/");
  }

  useMemo(() => {
    setTotal(quantity * price);
  }, [quantity, price]);

  useEffect(() => {
    if (id) {
      setIsLoad(true);
      Product.getById(id)
        .then(({ data }) => {
          setProduct(data);
        })
        .catch((error) => toast.error(error))
        .finally(() => {
          setIsLoad(false);
        });
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
    total,
    setTotal,
    quantity,
    setQuantity,
    price,
    product,
  };
};
