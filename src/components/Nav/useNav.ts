import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import { useEffect, useState } from "react";

export const useNav = () => {
  const navigate = useNavigate();
  const { bagProducts } = useAppContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const temp = bagProducts
      .map((i) => i.price * i.quantity)
      .reduce((acc, price) => acc + price, 0);

    setTotal(temp);
  }, [bagProducts]);

  return { navigate, total };
};
