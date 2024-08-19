import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";
import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { Pix } from "../../Services/Pix";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { IPixDTO } from "../../types/pix";

export const usePix = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });

  const [timeLeft, setTimeLeft] = useState(300);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const navigate = useNavigate();
  const { setIsLoad } = useAppContext();
  const [payment, setPayment] = useState<IPixDTO>({} as IPixDTO);

  useEffect(() => {
    let interval = 0;
    let getPix = 0;

    if (payment?.id) {
      const paymentId = payment.id;

      interval = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      getPix = setInterval(() => {
        Pix.status({ paymentId })
          .then(({ data }) => console.log(data))
          .catch((error) => {
            toast.error(error);
          });
      }, 5000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(getPix);
    };
  }, [payment]);

  const getPix = useCallback(() => {
    setIsLoad(true);
    const expirationDate = moment().add(5, "minutes");
    const formattedExpirationDate = expirationDate.format(
      "YYYY-MM-DDTHH:mm:ssZ"
    );

    const PAYLOAD = {
      transaction_amount: 5.5,
      description: "teste App dexaki",
      paymentMethodId: "pix",
      email: "danrleypow@gmail.com",
      identificationType: "04544207304",
      number: dataDelivery.phone,
      date_of_expiration: formattedExpirationDate,
    };

    Pix.create(PAYLOAD)
      .then(({ data }) => {
        setPayment(data);

        const udapte = {
          ...dataDelivery,
          qr_code: data.point_of_interaction.transaction_data.qr_code,
        };
        setDataDelivery(udapte);
      })
      .catch((error) => {
        toast.error(error);
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  useEffect(() => {
    getPix();
  }, [getPix]);

  return {
    navigate,
    minutes,
    seconds,
    payment,
  };
};
