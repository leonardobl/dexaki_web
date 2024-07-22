import { useLocalStorage } from "../../hooks/useLocalStorage"
import { IDataDeliveryUser } from "../../model/Product"

const initialValuesDelivery: IDataDeliveryUser = {
  name: '',
  email: '',
  phone: '',
  adress: undefined,
  typeOfpayment: undefined,
  delivery: undefined,
  products: [],
}

export const useLayout = () => {
  const [dataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery", initialValue: initialValuesDelivery })

  return {
    dataDelivery
  }
}
