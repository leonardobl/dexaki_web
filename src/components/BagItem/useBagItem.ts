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


export const useBagItem = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery", initialValue: userDelivery })

  function addQuantity(product: IProductsCart) {

    const updateProduct = dataDelivery.products.find((p: IProductsCart) => p.id === product.id)!


    const result = {
      ...updateProduct,
      quantity: updateProduct.quantity + 1
    }

    console.log(result)


    setDataDelivery({
      ...dataDelivery,
      products: [
        ...dataDelivery.products,
        result
      ]
    })
  }


  function lessuantity() { }

  return { addQuantity, lessuantity };
};
