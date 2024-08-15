import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
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
