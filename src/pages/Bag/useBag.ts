import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

export const useBag = () => {
  const navigate = useNavigate();
  const { bagProducts } = useAppContext();

  return { navigate, bagProducts };
};
