
import { useNavigate } from 'react-router-dom'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { IconNotification } from '../../assets/icons/IconNotification'
import * as S from './styles'

export const Notification = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/')}>
        <IconArrowLeft />
        <h1>Notificação</h1>
      </S.Header>

      <S.Body>
        <S.ContentNotification>
          <IconNotification />
          <p>Você não possui nenhuma notificação no momento</p>
        </S.ContentNotification>
      </S.Body>

    </S.Wrapper>
  )
}

