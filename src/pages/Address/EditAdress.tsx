import * as S from './styles'
import { useAdress } from './useAdress'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { InputRHF } from '../../components/FormRHF/InputRHF'
import { Button } from '../../components/Button/Button'
import { IoLocationOutline } from "react-icons/io5";



export const EditAdress = () => {
  const { navigate, FormProvider, methods } = useAdress()
  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/adress')}>
        <IconArrowLeft />
        <h1>Editar Endereço</h1>
      </S.Header>
      <S.Body>
        <S.DescriptionAdressEdit>
          <div className='description'>
            <IoLocationOutline size={30} />
            <div>
              <strong>Casa Z, 448</strong>
              <p>R.Engenheiro Davi Caldas, 245, Bloco 1 ap 09</p>
              <p>Próximo ao comercial didi</p>
            </div>
          </div>
        </S.DescriptionAdressEdit>
        <FormProvider {...methods}>
          <S.ContentFormAdress>
            <InputRHF name='numero' placeholder='Número' />
            <InputRHF name='rua' placeholder='Rua, Quadra, Casa' />
            <InputRHF name='complemento' placeholder='Ponto de Referência(opcional)' />
            <Button >Salvar Endereço</Button>
          </S.ContentFormAdress>
        </FormProvider>
      </S.Body>
    </S.Wrapper>
  )
}
