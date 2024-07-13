import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 24px;


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
  height: 100%;
  margin-top: 16px;
`


export const Card = styled.div`
  background-color: #fff;
  padding: 14px;
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

export const ContentLogin = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 14px;
  }

  button {
    background-color: transparent;
    padding: 10px 16px;
    border: 1px solid #ccc;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
`;