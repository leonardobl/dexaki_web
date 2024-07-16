import styled from "styled-components";

export const Wrapper = styled.div`

  /* height: 100vh;  */
  background-color: #FAFAFA;
`;

export const HeaderAdress = styled.div`
  display: flex;
  padding: 16px;

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
  overflow-y: scroll;
  max-height: calc(100vh - 146px);
  height: 100%;
  padding: 0px 16px 24px 16px;

`


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
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;

  .content-description {
    display: flex;
    gap: 16px;
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;

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

export const ContentCardAdress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
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