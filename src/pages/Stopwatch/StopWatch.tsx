import * as S from "./styles";
import { IconArrowLeft } from "../../assets/icons/IconArrowLeft";
import { usePayment } from "./usePayment";
import { InputCopy } from "../../components/Form/InputCopy/InputCopy";
import { Button } from "../../components/Button/Button";
import { FaWhatsapp } from "react-icons/fa";

export const StopWatch = () => {
  const { navigate, dataDelivery } = usePayment();

  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate("/payment")}>
        <IconArrowLeft />
        <h1>Tempo para pagamento</h1>
      </S.Header>

      <S.Body>
        <div className="time">
          <h3>Aguardando Pagamento</h3>
          <p>Pague em até:</p>
          <h1>4:46</h1>
        </div>

        <div className="content-code">
          <p>
            Copie o código PIX abaixo e cole para pagar em qualquer aplicativo
          </p>
          <InputCopy value={dataDelivery.qr_code!} />
          <Button>Copiar Código</Button>
          <Button data-variant-outline>
            Continuar no Whatsapp
            <FaWhatsapp size={20} />
          </Button>
        </div>
      </S.Body>
    </S.Wrapper>
  );
};
