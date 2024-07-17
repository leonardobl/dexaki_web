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
    formAdress
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
                      title='Retirar No Local'
                      label='Rua Trevos, 1223 Morada do Sol, Teresina'
                      id='local'
                      value={'local'}
                      name='group'
                    />
                    <Radio
                      title='Retirar No Estabelecimento'
                      label='Rua Trevos, 1223 Morada do Sol, Teresina'
                      id='retirada'
                      value={'retirada'}
                      name='group'
                    />
                  </S.ContentRadio>

                </S.NotAdress>
              )
            }
          </S.ContentCardAdress>

          <S.ContentPay>
            <h3>Forma de pagamento: </h3>
            <Radio
              icon={<FaPix size={18} />}
              title='Pix'
              label='Pagamento seguro via Pix (Recomendado)'
              id='pix'
              value={'pix'}
              name='typePay'
            />
            <Radio
              icon={<MdAttachMoney size={20} />}
              title='Dinheiro'
              label='Fazer pagamento no momento da entrega'
              id='dinheiro'
              value={'dinheiro'}
              name='typePay'
            />
            <Radio
              icon={<IoMdCard size={20} />}
              title='Cartão'
              label='Fazer pagamento no momento da entrega.'
              description='visa, mastercard, elo, hipercard, AmericanExpress'
              id='cartao'
              value={'cartao'}
              name='typePay'
            />
            <Button variant='outlined'>Finalizar</Button>
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
              <Button variant='outlined'><FaTrash />Excluir</Button>
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
    </Template>
  )
}

