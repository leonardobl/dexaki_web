import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export const useBag = () => {
  const navigate = useNavigate();
  const { bagProducts } = useAppContext();
  const total = bagProducts
    .map((i) => i.price * i.quantity)
    .reduce((acc, p) => acc + p, 0);
  const frete = 5.5;
  const { handleCleanBag } = useAppContext();

  return { navigate, bagProducts, total, frete, handleCleanBag };
};
