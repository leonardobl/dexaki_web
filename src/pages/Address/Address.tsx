import { IconArrowLeft } from "../../assets/icons/IconArrowLeft";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import * as S from "./styles";
import { Template } from "../../template/Template";
import { BsClockHistory } from "react-icons/bs";
import { Button } from "../../components/Button/Button";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { ModalBottom } from "../../components/ModalBottom";
import { useAdress } from "./useAdress";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { InputRHF } from "../../components/FormRHF/InputRHF";
import { maskPhone } from "../../Util/masks";
import { GiStorkDelivery } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { Radio } from "../../components/Form/Radio";

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
    finalizar,
    deleteAdress,
    onChangeDeliveryType,
  } = useAdress();

  return (
    <Template>
      <S.Wrapper>
        <S.Header onClick={() => navigate("/bag")}>
          <IconArrowLeft />
          <h1>Endereço</h1>
        </S.Header>

        <S.Body>
          <S.UserDescription>
            <div>
              <span>Este pedido será entregue a:</span>
              <strong>{dataDelivery?.name}</strong>
              <small>{dataDelivery?.phone}</small>
            </div>
            <div className="content-btn">
              <Button data-variant-outline onClick={() => editUser()}>
                Trocar
              </Button>
            </div>
          </S.UserDescription>

          <S.ContentCardAdress>
            {dataDelivery?.adress ? (
              <S.Card>
                <div className="headerCard">
                  <p>Entrega no Endereço:</p>
                  <div onClick={() => setShowModalAdress(true)}>
                    <MdOutlineMoreHoriz />
                  </div>
                </div>
                <div>
                  <div className="content-description">
                    <FaLocationDot size={20} />
                    <div className="description">
                      <p>Número: {dataDelivery?.adress?.numero}</p>
                      <span>{dataDelivery?.adress?.rua}</span>
                      <span>{dataDelivery?.adress?.complemento}</span>
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
                  Nenhum Endereço cadastrado clique abaixo para cadastrar um
                  novo endereço.
                </p>
                <S.HeaderAdress>
                  <Button
                    data-variant-outline
                    onClick={() => formAdress("new")}
                  >
                    Adicionar Endereço
                    <MdOutlineAddLocationAlt size={20} />
                  </Button>
                </S.HeaderAdress>

                <S.ContentRadio>
                  <Radio
                    title="Consumir No Local"
                    label="Rua Trevos, 1223 Morada do Sol, Teresina"
                    id="local"
                    value={"consumir_no_local"}
                    onChange={(e) => onChangeDeliveryType(e.target.value)}
                    name="group"
                    checked={dataDelivery?.delivery === "consumir_no_local"}
                  />
                  <Radio
                    title="Retirar No Estabelecimento"
                    label="Rua Trevos, 1223 Morada do Sol, Teresina"
                    id="retirada"
                    value={"retirar_no_estabelecimento"}
                    onChange={(e) => onChangeDeliveryType(e.target.value)}
                    name="group"
                    checked={
                      dataDelivery?.delivery === "retirar_no_estabelecimento"
                    }
                  />
                </S.ContentRadio>
              </S.NotAdress>
            )}
          </S.ContentCardAdress>

          <S.ContentBtn>
            <Button
              // data-variant-outline
              onClick={() => finalizar()}
              disabled={!dataDelivery?.adress}
            >
              Finalizar Pedido
            </Button>
          </S.ContentBtn>
        </S.Body>

        <ModalBottom
          isOpen={showModalAdress}
          onClose={() => setShowModalAdress(!showModalAdress)}
        >
          <S.DescriptionAdress>
            <div className="description">
              <IoLocationOutline size={30} />
              <div>
                <strong>Casa Z, 448</strong>
                <p>R.Engenheiro Davi Caldas, 245, Bloco 1 ap 09</p>
                <p>Próximo ao comercial didi</p>
              </div>
            </div>
            <div className="content-btn">
              <Button data-variant-outline onClick={() => deleteAdress()}>
                <FaTrash />
                Excluir
              </Button>
              <Button onClick={() => formAdress("edit")}>
                <MdEdit />
                Editar
              </Button>
            </div>
          </S.DescriptionAdress>
        </ModalBottom>
      </S.Wrapper>

      <ModalBottom
        isOpen={showModalUser}
        onClose={() => setShowModalUser(false)}
      >
        <S.ModalDescription>
          <h3>
            Falta pouco <GiStorkDelivery size={25} />
          </h3>
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
            >
              Avançar
            </Button>
          </FormProvider>
        </S.ContentModalInput>
      </ModalBottom>
    </Template>
  );
};
