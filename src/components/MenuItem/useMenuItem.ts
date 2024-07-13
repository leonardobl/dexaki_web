import { useNavigate } from "react-router-dom";

export const useMenuItem = () => {
  const navigate = useNavigate();

  return { navigate };
};
