import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";
import { useEffect, useState } from "react";

export const useStopWatch = () => {
  const navigate = useNavigate();
  const [dataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });
  const [timeLeft, setTimeLeft] = useState(300); // 300 segundos = 5 minutos

  useEffect(() => {
    const handleBeforeUnload = () => {
      setTimeLeft(300); // Reseta o contador ao sair da página
      clearInterval(interval);
    };

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return {
    navigate,
    dataDelivery,
    minutes,
    seconds,
  };
};
