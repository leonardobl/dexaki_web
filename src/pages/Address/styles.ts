import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
`;

export const HeaderAdress = styled.div`
  display: flex;
  margin-top: 6px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;
  gap: 18px;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Body = styled.div`
  padding: 0 16px;
`;

export const CardMain = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 16px;
  gap: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 24px;

  > div {
    p {
      font-size: 12px;
      color: #333;
      font-weight: 600;
    }

    span {
      font-size: 12px;
      color: #666;
      font-weight: 300;
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 12px;

  .headerCard {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 12px;
      margin-bottom: 10px;
      color: #999;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .content-description {
    display: flex;
    gap: 10px;
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;

    p {
      font-size: 12px;
      color: #333;
      font-weight: 600;
      margin-bottom: 0px;
    }

    span {
      font-size: 12px;
      color: #666;
      font-weight: 300;
    }
  }

  .footer-card {
    width: 100%;
    margin-top: 6px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    p {
      font-size: 10px;
      color: #999;
    }
  }
`;

export const ContentCardAdress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    color: #333;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const DescriptionAdress = styled.div`
  .description {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > div {
      line-height: 17px;
      strong {
        font-size: 14px;
        color: #333;
      }
      p {
        color: #999;
        font-size: 14px;
      }
    }
  }

  .content-btn {
    margin: 24px 0;
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;

export const ContentFormAdress = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  grid-template-areas: "cep cep cep cep" "rua rua rua numero" "bairro bairro complemento complemento" "estado estado cidade cidade" "referencia referencia referencia referencia" "btn1 btn1 btn1 btn1" "btn2 btn2 btn2 btn2";

  > :nth-child(1) {
    grid-area: cep;
  }

  > :nth-child(2) {
    grid-area: rua;
  }

  > :nth-child(3) {
    grid-area: numero;
  }

  > :nth-child(4) {
    grid-area: bairro;
  }

  > :nth-child(5) {
    grid-area: complemento;
  }

  > :nth-child(6) {
    grid-area: estado;
  }

  > :nth-child(7) {
    grid-area: cidade;
  }

  > :nth-child(8) {
    grid-area: referencia;
  }

  > :nth-child(9) {
    grid-area: btn1;
  }
  > :nth-child(10) {
    grid-area: btn2;
  }
`;

export const DescriptionAdressEdit = styled.div`
  margin: 24px 0;
  .description {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > div {
      line-height: 17px;
      strong {
        font-size: 14px;
        color: #333;
      }
      p {
        color: #999;
        font-size: 14px;
      }
    }
  }
`;

export const UserDescription = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;
  margin: 0px 0px 24px 0px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;

    span {
      color: #999;
      font-size: 13px;
    }
    strong {
      font-size: 15px;
      font-weight: 600;
    }
    small {
      font-weight: 300;
    }
  }

  .content-btn {
    width: 140px;
  }
`;

export const ModalDescription = styled.div`
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p {
    font-size: 14px;
    color: #999;
    font-weight: 300;
  }
`;

export const ContentModalInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NotAdress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  border: 1px solid ${(props) => props.theme.primary["800"]};
  padding: 10px;
  border-radius: 6px;

  p {
    font-size: 14px;
    color: #999;
    /* text-align: center; */
  }
`;

export const ContentRadio = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentBtn = styled.div`
  margin-top: 24px;
`;
