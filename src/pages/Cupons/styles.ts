import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 24px;
  height: 100vh;
  background-color: #FAFAFA;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0px;
  gap: 18px;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }
`;


export const Body = styled.div`
  header {
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .content-icon {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }
`


export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Card = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;

  .description {
    display: flex;
    align-items: center;
    gap: 16px;

    .text {
      p {
      color: #333;
      font-size: 14px;
      }

      small {
        color: #666;
        font-size: 12px;
      }
    } 
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primary['800']};
    font-size: 12px;
    font-weight: 500;
  }
`