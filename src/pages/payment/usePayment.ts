
import { useNavigate } from 'react-router-dom'

export const usePayment = () => {
  const navigate = useNavigate()

  return {
    navigate
  }
}
