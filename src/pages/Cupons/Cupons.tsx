import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "../../assets/icons/IconArrowLeft";
import * as S from "./styles";
import { FaGifts } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { NewLayout } from "../NewLayout";

export const Cupons = () => {
  const navigate = useNavigate();
  return (
    <NewLayout>
      <S.Wrapper>
        <S.Header onClick={() => navigate("/myprofile")}>
          <IconArrowLeft />
          <h1>Cupons</h1>
        </S.Header>

        <S.Body>
          <div className="content-icon">
            <FaGifts size={80} color="#666" />
          </div>

          <h3>Cupons disponíveis</h3>

          <S.ContentCard>
            <S.Card>
              <div className="description">
                <IoTicketOutline size={32} />
                <div className="text">
                  <p>R$ 10 Disponível</p>
                  <small>Acaba em 4h 40mim</small>
                </div>
              </div>

              <a href="#">Ver Mais</a>
            </S.Card>

            <S.Card>
              <div className="description">
                <IoTicketOutline size={32} />
                <div className="text">
                  <p>R$ 15 Disponível</p>
                  <small>Acaba em 4h 40mim</small>
                </div>
              </div>

              <a href="#">Ver Mais</a>
            </S.Card>
          </S.ContentCard>
        </S.Body>
      </S.Wrapper>
    </NewLayout>
  );
};
