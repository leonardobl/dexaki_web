import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataProducts, IDataProducts } from "../../Mocks/productsMock";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser, IProductsCart } from "../../model/Product";


const userDelivery: IDataDeliveryUser = {
  name: '',
  email: '',
  phone: '',
  adress: undefined,
  typeOfpayment: undefined,
  delivery: undefined,
  products: []
}


export const useProduct = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery", initialValue: userDelivery })
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const [product, setProduct] = useState<IDataProducts>({} as IDataProducts);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  function addToCart() {

    setShowModal(true)
    const alreadyExistProduct = dataDelivery.products.some(p => p.id === product.id)

    if (alreadyExistProduct) {
      const updateProducts = dataDelivery.products.map((p: IProductsCart) =>
        p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
      );

      setDataDelivery({
        ...dataDelivery,
        products: updateProducts
      })

    } else {
      setDataDelivery({
        ...dataDelivery,
        products: [
          ...dataDelivery.products,
          {
            id: product.id,
            category: product.category,
            description: product.description,
            img: product.img,
            name: product.name,
            price: product.price,
            quantity: quantity,
            discountCoupon: 0
          }
        ]
      })
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
      const prod = DataProducts.find((i) => i.id === id) as IDataProducts;
      setProduct(prod);
      setPrice(prod.price)
      setTotal(prod.price)
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
