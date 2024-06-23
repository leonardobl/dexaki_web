import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 24px;
  height: 100vh;
  background-color: #FAFAFA;


  header {
    padding-top: 24px;
    width: 100%;
    display: flex;
    gap: 16px;
    align-items: center;

    h3 {
      color: #666666;
      font-weight: 500;
    }
  }
`;


export const Profile = styled.div`
  height: 55px;
  width: 55px;
  background-color: #ddd;
  border-radius: 50%;
`

export const Body = styled.div`
  width: 100%;
  margin-top: 44px;
`


export const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 4px;

  .content-info {
    display: flex;
  }


  > div {
    gap: 16px;
    display: flex;
    align-items: center;
   

    p {
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }

    span {
      font-size: 12px;
      color: #666;
      font-weight: 300;

    }
  }
`