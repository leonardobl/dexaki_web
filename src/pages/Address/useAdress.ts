import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { IDataAdressProps, formSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { IDataDeliveryUser } from "../../model/Product";
import { IDataUserProps, formSchemaUser } from "../Bag/schema";
import { useAppContext } from "../../context/AppContext";
import { API } from "../../Api";
import moment from "moment";

export const useAdress = () => {
  const [showModalAdress, setShowModalAdress] = useState(false);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalUser, setShowModalUser] = useState(false);

  const navigate = useNavigate();
  const { dataDelivery, setDataDelivery } = useAppContext();
  const { mode } = useParams();

  const initialValueAdress = {
    numero: dataDelivery.adress?.numero.toString() ?? "",
    rua: dataDelivery.adress?.rua ?? "",
    complemento: dataDelivery.adress?.complemento ?? "",
  };

  const initialValueUser = {
    phone: dataDelivery.phone,
    name: dataDelivery.name,
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
      adress: {
        rua: data.rua,
        numero: Number(data.numero),
        complemento: data.complemento,
        currentAdress: true,
      },
    };

    setDataDelivery(result);
    navigate("/adress");
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
    if (dataDelivery.adress || dataDelivery.delivery) {
      setShowModalConfirm(true);
    }
  }

  function editUser() {
    setShowModalUser(true);
  }

  function formAdress(mode: string) {
    navigate(`/editAdress/${mode}`);
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

  async function fazerPedido() {
    if (dataDelivery.typeOfpayment === "pix") {
      const expirationDate = moment().add(5, "minutes");
      const formattedExpirationDate = expirationDate.format(
        "YYYY-MM-DDTHH:mm:ssZ"
      );

      const body = {
        // transaction_amount:
        description: "teste App dexaki",
        paymentMethodId: "pix",
        email: "danrleypow@gmail.com",
        identificationType: "04544207304",
        number: dataDelivery.phone,
        date_of_expiration: formattedExpirationDate,
      };

      try {
        const result = await API.post("create-pix", body);
        if (result) {
          const udapte = {
            ...dataDelivery,
            qr_code: result.data.point_of_interaction.transaction_data.qr_code,
          };
          setDataDelivery(udapte);
          navigate("/payment");
        }
      } catch (error) {
        console.error("Erro ao criar o PIX", error);
      }
    } else {
      console.log("outra opção de cartão");
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
    showModalConfirm,
    setShowModalConfirm,
    finalizar,
    deleteAdress,
    fazerPedido,
    onChangeTypeOfPayment,
    onChangeDeliveryType,
    parseTypeOfPayment,
  };
};
