import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import * as S from './styles'
import { Template } from '../../template/Template';
import { BsClockHistory } from "react-icons/bs";
import { Button } from '../../components/Button/Button';
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { ModalBottom } from '../../components/ModalBottom';
import { useAdress } from './useAdress';
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { InputRHF } from '../../components/FormRHF/InputRHF';
import { maskPhone } from '../../Util/masks';
import { GiStorkDelivery } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { Radio } from '../../components/Form/Radio';
import { FaPix } from "react-icons/fa6";
import { IoMdCard } from "react-icons/io";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";

export const Address = () => {
  const {
    showModalAdress,
    setShowModalAdress,
    navigate,
    showModalUser,
    setShowModalUser,
    methodsUser,
    FormProvider,
    onSendSubmitEditUser,
    userErros,
    editUser,
    dataDelivery,
    formAdress,
    showModalConfirm,
    setShowModalConfirm,
    finalizar,
    deleteAdress,
    onChangeDeliveryType,
    fazerPedido,
    onChangeTypeOfPayment,
    parseTypeOfPayment
  } = useAdress()

  return (
    <Template>
      <S.Wrapper>
        <S.Header onClick={() => navigate('/myprofile')}>
          <IconArrowLeft />
          <h1>Endereço</h1>
        </S.Header>

        <S.Body>
          <S.UserDescription>
            <div>
              <span>Este pedido será entregue a:</span>
              <strong>{dataDelivery.name}</strong>
              <small>{dataDelivery.phone}</small>
            </div>
            <div className='content-btn'>
              <Button variant='outlined' onClick={() => editUser()}>Trocar</Button>
            </div>
          </S.UserDescription>

          <S.ContentCardAdress>
            {
              dataDelivery.adress ? (
                <S.Card>
                  <div className="headerCard">
                    <p>Entrega no Endereço:</p>
                    <div onClick={() => setShowModalAdress(true)}>
                      <MdOutlineMoreHoriz />
                    </div>
                  </div>
                  <div>
                    <div className='content-description'>
                      <FaLocationDot size={20} />
                      <div className='description'>
                        <p>Número: {dataDelivery.adress.numero}</p>
                        <span>{dataDelivery.adress.rua}</span>
                        <span>{dataDelivery.adress.complemento}</span>

                      </div>
                    </div>
                  </div>
                  <div className="footer-card">
                    <BsClockHistory size={12} />
                    <p>Entre 40 - 60 mim</p>
                  </div>
                </S.Card>
              ) : (

                <S.NotAdress>
                  <p>
                    Nenhum Endereço cadastrado  clique abaixo para cadastrar um novo endereço.
                  </p>
                  <S.HeaderAdress>
                    <Button variant='outlined' onClick={() => formAdress('new')}>
                      Adicionar Endereço
                      <MdOutlineAddLocationAlt size={20} />
                    </Button>
                  </S.HeaderAdress>

                  <S.ContentRadio>
                    <Radio
                      title='Consumir No Local'
                      label='Rua Trevos, 1223 Morada do Sol, Teresina'
                      id='local'
                      value={'consumir_no_local'}
                      onChange={(e) => onChangeDeliveryType(e.target.value)}
                      name='group'
                      checked={dataDelivery.delivery === 'consumir_no_local'}
                    />
                    <Radio
                      title='Retirar No Estabelecimento'
                      label='Rua Trevos, 1223 Morada do Sol, Teresina'
                      id='retirada'
                      value={'retirar_no_estabelecimento'}
                      onChange={(e) => onChangeDeliveryType(e.target.value)}
                      name='group'
                      checked={dataDelivery.delivery === 'retirar_no_estabelecimento'}
                    />
                  </S.ContentRadio>

                </S.NotAdress>
              )
            }
          </S.ContentCardAdress>

          <S.ContentPay>
            <h3>Selecione uma forma de pagamento: </h3>
            <Radio
              icon={<FaPix size={18} />}
              title='Pix'
              label='Pagamento seguro via Pix (Recomendado)'
              id='pix'
              value={'pix'}
              onChange={(e) => onChangeTypeOfPayment(e.target.value)}
              name='typePay'
              checked={dataDelivery.typeOfpayment === 'pix'}
            />
            <Radio
              icon={<MdAttachMoney size={20} />}
              title='Dinheiro'
              label='Fazer pagamento no momento da entrega'
              id='money'
              value={'money'}
              onChange={(e) => onChangeTypeOfPayment(e.target.value)}
              name='typePay'
              checked={dataDelivery.typeOfpayment === 'money'}
            />
            <Radio
              icon={<IoMdCard size={20} />}
              title='Cartão'
              label='Fazer pagamento no momento da entrega.'
              description='visa, mastercard, elo, hipercard, AmericanExpress'
              id='card'
              value={'card'}
              onChange={(e) => onChangeTypeOfPayment(e.target.value)}
              name='typePay'
              checked={dataDelivery.typeOfpayment === 'card'}
            />

            <Button
              variant='outlined'
              onClick={() => finalizar()}
              disabled={(!dataDelivery.adress && !dataDelivery.delivery) || !dataDelivery.typeOfpayment}
            >Finalizar</Button>
          </S.ContentPay>

        </S.Body>

        <ModalBottom isOpen={showModalAdress} onClose={() => setShowModalAdress(!showModalAdress)}>
          <S.DescriptionAdress>
            <div className='description'>
              <IoLocationOutline size={30} />
              <div>
                <strong>Casa Z, 448</strong>
                <p>R.Engenheiro Davi Caldas, 245, Bloco 1 ap 09</p>
                <p>Próximo ao comercial didi</p>
              </div>
            </div>
            <div className="content-btn">
              <Button variant='outlined' onClick={() => deleteAdress()}><FaTrash />Excluir</Button>
              <Button onClick={() => formAdress('edit')}>
                <MdEdit />
                Editar
              </Button>
            </div>
          </S.DescriptionAdress>
        </ModalBottom>

      </S.Wrapper>

      <ModalBottom isOpen={showModalUser} onClose={() => setShowModalUser(false)}>
        <S.ModalDescription>
          <h3>Falta pouco <GiStorkDelivery size={25} /></h3>
          <p>Coloque abaixo seu nome e seu número!</p>
        </S.ModalDescription>

        <S.ContentModalInput>
          <FormProvider {...methodsUser}>

            <InputRHF
              name="phone"
              placeholder="(XX) XXXXX - XXXX"
              maxLength={15}
              mask={maskPhone}
              error={userErros?.phone?.message}
            />
            <InputRHF
              name="name"
              placeholder="Digite seu Nome e sobrenome"
              error={userErros?.name?.message}
            />

            <Button
              onClick={() => methodsUser.handleSubmit(onSendSubmitEditUser)()}
            >Avançar
            </Button>

          </FormProvider>
        </S.ContentModalInput>
      </ModalBottom>

      <ModalBottom isOpen={showModalConfirm} onClose={() => setShowModalConfirm(false)}>
        <S.ModalConfirm>
          <h3>Revise o seu pedido</h3>
          <S.UserData>
            <AiOutlineUser size={22} />
            <div>
              <strong>{dataDelivery.name}</strong>
              <p>{dataDelivery.phone}</p>
            </div>
          </S.UserData>
          <S.AdressUser>
            <FaLocationDot size={22} />
            {dataDelivery.adress ? (<div>
              <strong>Número: {dataDelivery.adress?.numero}</strong>
              <p>{dataDelivery.adress?.rua}</p>
              <p>{dataDelivery.adress?.complemento}</p>
            </div>) : (
              <div>
                <p>{dataDelivery.delivery === 'consumir_no_local' ? 'Consumir no Local' : 'Retirar no Estabelecimento'}</p>
              </div>
            )}
          </S.AdressUser>
          <S.Ticket>
            <IoTicket size={22} />
            <p>Nenhum cupom aplicado</p>
          </S.Ticket>
          <S.TypePay>
            {dataDelivery.typeOfpayment === 'pix' && <FaPix size={22} />}
            {dataDelivery.typeOfpayment === 'money' && <MdAttachMoney size={22} />}
            {dataDelivery.typeOfpayment === 'card' && <IoMdCard size={22} />}

            <p>Forma de pagamento selecionado: {parseTypeOfPayment(dataDelivery.typeOfpayment!)}</p>
          </S.TypePay>
          <Button onClick={() => fazerPedido()}>Fazer Pedido</Button>
          <Button variant='outlined' onClick={() => navigate('/bag')}>Alterar Pedido</Button>
        </S.ModalConfirm>
      </ModalBottom>
    </Template>
  )
}

