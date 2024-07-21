
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

export const usePayment = () => {
  const navigate = useNavigate()
  const { dataDelivery } = useAppContext()

  return {
    navigate,
    dataDelivery
  }
}
