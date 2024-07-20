import * as S from './styles'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { usePayment } from './usePayment'
import { InputCopy } from '../../components/Form/InputCopy/InputCopy'
import { Button } from '../../components/Button/Button'
import { FaWhatsapp } from "react-icons/fa";

export const Payment = () => {
  const { navigate } = usePayment()

  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/adress')}>
        <IconArrowLeft />
        <h1>pagamento</h1>
      </S.Header>

      <S.Body>
        <div className='time'>
          <h3>Aguardando Pagamento</h3>
          <p>Pague em até:</p>
          <h1>4:46</h1>
        </div>

        <div className='content-code'>
          <p>Copie o código PIX abaixo e cole para pagar em qualquer aplicativo</p>
          <InputCopy />
          <Button >Copiar Código</Button>
          <Button variant='outlined'>
            Continuar no Whatsapp
            <FaWhatsapp size={20} />
          </Button>
        </div>
      </S.Body>
    </S.Wrapper>
  )
}

