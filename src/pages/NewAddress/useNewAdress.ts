import { useNavigate, useParams } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";
import { IDataUserProps } from "../Bag/schema";
import { IDataAdressProps, formSchema } from "../Address/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useNewAdress = () => {
  const { mode } = useParams();
  const navigate = useNavigate();
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });

  const initialValueAdress = {
    numero: dataDelivery?.adress?.numero?.toString() ?? "",
    rua: dataDelivery?.adress?.rua ?? "",
    complemento: dataDelivery?.adress?.complemento ?? "",
  };

  const methodsAdress = useForm<IDataAdressProps>({
    mode: "onSubmit",
    shouldFocusError: false,
    defaultValues: initialValueAdress,
    resolver: zodResolver(formSchema),
  });

  const {
    formState: { errors: adressErros },
  } = methodsAdress;

  function onSendSubmitEditUser(data: IDataUserProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      name: data.name,
      phone: data.phone,
    };

    setDataDelivery(result);
  }

  function onSendSubmitSaveAdress(data: IDataAdressProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      delivery: undefined,
      typeOfpayment: undefined,
      adress: {
        rua: data.rua,
        numero: Number(data.numero),
        complemento: data.complemento,
        currentAdress: true,
      },
    };

    setDataDelivery(result);
    navigate(-1);
  }

  return {
    mode,
    navigate,
    dataDelivery,
    onSendSubmitEditUser,
    onSendSubmitSaveAdress,
    methodsAdress,
    adressErros,
  };
};
