import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const TypeDelivery = () => {
  const navigate = useNavigate()


  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/')}>
        <MdOutlineKeyboardArrowLeft size={22} />
        <h1>Entregar no Endereço</h1>

        <S.Body>

        </S.Body>
      </S.Header>
    </S.Wrapper>
  )
}

