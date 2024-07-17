import * as S from './styles'
import { useAdress } from './useAdress'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { InputRHF } from '../../components/FormRHF/InputRHF'
import { Button } from '../../components/Button/Button'
import { IoLocationOutline } from "react-icons/io5";

export const EditAdress = () => {
  const { navigate, FormProvider, methodsAdress, adressErros, mode, dataDelivery, onSendSubmitSaveAdress } = useAdress()

  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/adress')}>
        <IconArrowLeft />
        {
          mode === 'edit' ? (
            <h1>Editar Endereço</h1>
          ) : (
            <h1>Novo Endereço</h1>
          )
        }
      </S.Header>
      <S.Body>
        {mode === 'edit' && (<S.DescriptionAdressEdit>
          <div className='description'>
            <IoLocationOutline size={30} />
            <div>
              <strong>{dataDelivery.adress?.rua}</strong>
              <p>{dataDelivery.adress?.numero}</p>
              <p>{dataDelivery.adress?.complemento}</p>
            </div>
          </div>
        </S.DescriptionAdressEdit>)}
        <FormProvider {...methodsAdress}>
          <S.ContentFormAdress>
            <InputRHF name='numero' placeholder='Número' error={adressErros.numero?.message} />
            <InputRHF name='rua' placeholder='Rua, Quadra, Casa' error={adressErros.rua?.message} />
            <InputRHF name='complemento' placeholder='Ponto de Referência(opcional)' error={adressErros.complemento?.message} />
            <Button onClick={() => methodsAdress.handleSubmit(onSendSubmitSaveAdress)()}>Salvar Endereço</Button>
          </S.ContentFormAdress>
        </FormProvider>
      </S.Body>
    </S.Wrapper>
  )
}
