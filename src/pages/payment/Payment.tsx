import { MdAttachMoney } from "react-icons/md";
import { Radio } from "../../components/Form/Radio";
import * as S from "./styles";
import { usePayment } from "./usePayment";
import { IoMdCard } from "react-icons/io";
import { FaLocationDot, FaPix } from "react-icons/fa6";
import { Template } from "../../template/Template";
import { ModalBottom } from "../../components/ModalBottom";
import { AiOutlineUser } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import { Button } from "../../components/Button/Button";
import { IconArrowLeft } from "../../assets/icons/IconArrowLeft";


export const Payment = () => {
  const {
    navigate,
    dataDelivery,
    showModalConfirm,
    setShowModalConfirm,
    parseTypeOfPayment,
    onChangeTypeOfPayment,
    fazerPedido,
    finalizar
  } = usePayment();

  return (
    <Template>
      <S.Header onClick={() => navigate("/adress")}>
        <IconArrowLeft />
        <h1>Método de Pagamento</h1>
      </S.Header>

      <S.Wrapper>
        <S.ContentPay>
          <h3>Selecione uma forma de pagamento: </h3>
          <Radio
            icon={<FaPix size={18} />}
            title="Pix"
            label="Pagamento seguro via Pix (Recomendado)"
            id="pix"
            value={"pix"}
            onChange={(e) => onChangeTypeOfPayment(e.target.value)}
            name="typePay"
            checked={dataDelivery.typeOfpayment === "pix"}
          />
          <Radio
            icon={<MdAttachMoney size={20} />}
            title="Dinheiro"
            label="Fazer pagamento no momento da entrega"
            id="money"
            value={"money"}
            onChange={(e) => onChangeTypeOfPayment(e.target.value)}
            name="typePay"
            checked={dataDelivery.typeOfpayment === "money"}
          />
          <Radio
            icon={<IoMdCard size={20} />}
            title="Cartão"
            label="Fazer pagamento no momento da entrega."
            description="visa, mastercard, elo, hipercard, AmericanExpress"
            id="card"
            value={"card"}
            onChange={(e) => onChangeTypeOfPayment(e.target.value)}
            name="typePay"
            checked={dataDelivery.typeOfpayment === "card"}
          />


        </S.ContentPay>

        <S.ContentBtn>
          <Button
            // data-variant-outline
            onClick={() => finalizar()}
            disabled={!dataDelivery.typeOfpayment}
          >
            Finalizar Pedido
          </Button>
        </S.ContentBtn>
      </S.Wrapper>

      <ModalBottom
        isOpen={showModalConfirm}
        onClose={() => setShowModalConfirm(false)}
      >
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
            {dataDelivery.adress ? (
              <div>
                <strong>Número: {dataDelivery.adress?.numero}</strong>
                <p>{dataDelivery.adress?.rua}</p>
                <p>{dataDelivery.adress?.complemento}</p>
              </div>
            ) : (
              <div>
                <p>
                  {dataDelivery.delivery === "consumir_no_local"
                    ? "Consumir no Local"
                    : "Retirar no Estabelecimento"}
                </p>
              </div>
            )}
          </S.AdressUser>
          <S.Ticket>
            <IoTicket size={22} />
            <p>Nenhum cupom aplicado</p>
          </S.Ticket>
          <S.TypePay>
            {dataDelivery.typeOfpayment === "pix" && <FaPix size={22} />}
            {dataDelivery.typeOfpayment === "money" && (
              <MdAttachMoney size={22} />
            )}
            {dataDelivery.typeOfpayment === "card" && <IoMdCard size={22} />}

            <p>
              Forma de pagamento selecionado:{" "}
              {parseTypeOfPayment(dataDelivery.typeOfpayment!)}
            </p>
          </S.TypePay>
          <Button onClick={() => fazerPedido()}>Fazer Pedido</Button>
          <Button data-variant-outline onClick={() => navigate("/bag")}>
            Alterar Pedido
          </Button>
        </S.ModalConfirm>
      </ModalBottom>
    </Template>
  );
};
