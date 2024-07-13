
import { useNavigate } from 'react-router-dom';

export const useOrders = () => {
  const navigate = useNavigate();
  return {
    navigate
  }
}

