import * as S from "./styles";
import { IconArrowLeft } from "../../assets/icons/IconArrowLeft";

import { InputCopy } from "../../components/Form/InputCopy/InputCopy";
import { Button } from "../../components/Button/Button";
import { FaWhatsapp } from "react-icons/fa";
import { usePix } from "./usePix";
import { TbInfoTriangleFilled } from "react-icons/tb";

export const Pix = () => {
  const { minutes, seconds, navigate, payment } = usePix();

  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate("/payment")}>
        <IconArrowLeft />
        <h1>Pagamento via pix</h1>
      </S.Header>

      <S.Body>
        <div className="time">
          <h3>Aguardando Pagamento</h3>
          <p>Pague em até:</p>
          <h1>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>
        <div>
          {minutes === 0 && seconds === 0 ? (
            <S.WrapperInfo>
              <TbInfoTriangleFilled />
              <p>O qrcode expirou!</p>
            </S.WrapperInfo>
          ) : (
            <S.Qrcode
              src={`data:image/png;base64,${payment?.point_of_interaction?.transaction_data.qr_code_base64}`}
              alt="qrcode"
            />
          )}
        </div>
        <div className="content-code">
          <p>
            Copie o código PIX abaixo e cole para pagar em qualquer aplicativo
          </p>
          <InputCopy
            readOnly
            disabled={minutes === 0 && seconds === 0}
            value={payment?.point_of_interaction?.transaction_data?.qr_code}
          />
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
