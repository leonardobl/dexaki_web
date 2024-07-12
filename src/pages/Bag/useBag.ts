import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser, IProductsCart } from "../../model/Product";

const userDelivery: IDataDeliveryUser = {
  name: '',
  email: '',
  phone: '',
  adress: '',
  typeOfpayment: 'money',
  delivery: true,
  products: []
}

export const useBag = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery", initialValue: userDelivery })
  const navigate = useNavigate();

  const total = dataDelivery.products
    .map((i) => i.price * i.quantity)
    .reduce((acc, p) => acc + p, 0);

  const frete = 0.0;

  function addQuantity(product: IProductsCart) {
    const update: IProductsCart = {
      ...product,
      quantity: product.quantity + 1,
    };

    const updatedProducts = dataDelivery.products.map((i: IProductsCart) =>
      i.id === update.id ? update : i
    );

    const result = {
      ...dataDelivery,
      products: updatedProducts
    };

    setDataDelivery(result);
  }

  function lessQuantity(product: IProductsCart) {
    if (product.quantity <= 1) {
      const updateProduct = dataDelivery.products.filter(i => i.id !== product.id)
      setDataDelivery({
        ...dataDelivery,
        products: updateProduct
      })
    } else {
      const update: IProductsCart = {
        ...product,
        quantity: product.quantity - 1
      };

      const updatedProducts = dataDelivery.products.map((i: IProductsCart) =>
        i.id === update.id ? update : i
      );

      const result = {
        ...dataDelivery,
        products: updatedProducts
      };

      setDataDelivery(result);
    }

  }

  function CleanAll() {
    setDataDelivery({
      ...dataDelivery,
      products: []
    })
  }


  return { navigate, addQuantity, lessQuantity, CleanAll, dataDelivery, total, frete };
};
