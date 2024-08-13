import { useLocation } from "react-router-dom";

export const useNewLayout = () => {
  const { pathname } = useLocation();

  return { pathname };
};
