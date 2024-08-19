import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";
import { useState } from "react";

export const useTypePayment = () => {
  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });

  const navigate = useNavigate();

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

  function onChangeTypeOfPayment(value: string) {
    const result = {
      ...dataDelivery,
      typeOfpayment: value,
    };
    setDataDelivery(result);
  }

  function fazerPedido() {
    navigate(`/payment/${dataDelivery?.typeOfpayment}`);
  }

  // async function fazerPedido() {
  //   if (dataDelivery.typeOfpayment === "pix") {
  //     const expirationDate = moment().add(5, "minutes");
  //     const formattedExpirationDate = expirationDate.format(
  //       "YYYY-MM-DDTHH:mm:ssZ"
  //     );

  //     const body = {
  //       transaction_amount: 5.5,
  //       description: "teste App dexaki",
  //       paymentMethodId: "pix",
  //       email: "danrleypow@gmail.com",
  //       identificationType: "04544207304",
  //       number: dataDelivery.phone,
  //       date_of_expiration: formattedExpirationDate,
  //     };

  //     try {
  //       const result = await API.post("create-pix", body);
  //       if (result) {
  //         const udapte = {
  //           ...dataDelivery,
  //           qr_code: result.data.point_of_interaction.transaction_data.qr_code,
  //         };
  //         setDataDelivery(udapte);
  //         navigate("/payment/pix");
  //       }
  //     } catch (error) {
  //       console.error("Erro ao criar o PIX", error);
  //     }
  //   } else {
  //     console.log("outra opção de cartão");
  //   }
  // }

  // async function getStatusPix() {
  //   const body = {
  //     paymentId: "85256198615", //the id_payment
  //   };
  //   try {
  //     const result = await API.post("status-pix", body);
  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  function finalizar() {
    setShowModalConfirm(true);
  }

  return {
    setDataDelivery,
    navigate,
    dataDelivery,
    parseTypeOfPayment,
    onChangeTypeOfPayment,
    showModalConfirm,
    setShowModalConfirm,
    finalizar,
    fazerPedido,
  };
};
