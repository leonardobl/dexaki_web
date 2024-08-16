import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { IDataAdressProps, formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IDataDeliveryUser } from "../../model/Product";
import { IDataUserProps, formSchemaUser } from "../Bag/schema";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const useAdress = () => {
  const [showModalAdress, setShowModalAdress] = useState(false);

  const [showModalUser, setShowModalUser] = useState(false);

  const navigate = useNavigate();
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });
  const { mode } = useParams();

  const initialValueAdress = {
    numero: dataDelivery?.adress?.numero?.toString() ?? "",
    rua: dataDelivery?.adress?.rua ?? "",
    complemento: dataDelivery?.adress?.complemento ?? "",
  };

  const initialValueUser = {
    phone: dataDelivery?.phone,
    name: dataDelivery?.name,
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

  const methodsUser = useForm<IDataUserProps>({
    mode: "onSubmit",
    shouldFocusError: false,
    defaultValues: initialValueUser,
    resolver: zodResolver(formSchemaUser),
  });

  const {
    formState: { errors: userErros },
  } = methodsUser;

  function onSendSubmitEditUser(data: IDataUserProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      name: data.name,
      phone: data.phone,
    };

    setDataDelivery(result);
    setShowModalUser(false);
  }

  function onSendSubmitSaveAdress(data: IDataAdressProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      delivery: undefined,
      typeOfpayment: undefined,
      adress: {
        rua: data.rua,
        numero: Number(data.numero),
        complemento: data?.complemento || "",
        currentAdress: true,
      },
    };

    setDataDelivery(result);
    navigate(-1);
  }

  function deleteAdress() {
    const result = {
      ...dataDelivery,
      adress: undefined,
    };
    setDataDelivery(result);
    setShowModalAdress(false);
  }

  function finalizar() {
    if (dataDelivery.adress) {
      navigate("/payment");
    }
  }

  function editUser() {
    setShowModalUser(true);
  }

  function formAdress(mode: string) {
    navigate(`/myprofile/adress/${mode}`);
  }

  function onChangeTypeOfPayment(value: string) {
    const result = {
      ...dataDelivery,
      typeOfpayment: value,
    };
    setDataDelivery(result);
  }

  function onChangeDeliveryType(value: string) {
    const result = {
      ...dataDelivery,
      delivery: value,
    };
    setDataDelivery(result);
  }

  function parseTypeOfPayment(value: string) {
    switch (value) {
      case "pix":
        return "Pix";
      case "card":
        return "Cartão";
      case "money":
        return "Dinheiro";
    }
  }

  return {
    onSendSubmitSaveAdress,
    dataDelivery,
    userErros,
    adressErros,
    FormProvider,
    methodsAdress,
    navigate,
    showModalAdress,
    setShowModalAdress,
    editUser,
    showModalUser,
    setShowModalUser,
    methodsUser,
    onSendSubmitEditUser,
    formAdress,
    mode,
    finalizar,
    deleteAdress,
    onChangeTypeOfPayment,
    onChangeDeliveryType,
    parseTypeOfPayment,
  };
};
