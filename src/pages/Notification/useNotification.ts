import { useNavigate } from "react-router-dom";

export const useNotification = () => {
  const navigate = useNavigate();

  return { navigate };
};
