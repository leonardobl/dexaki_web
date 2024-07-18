import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  input[type="radio"] {
    display: none;
  }

  label {
    position: relative;
    width: 100%;
    padding: 16px 16px;
    border: 1px solid #ccc;
    color: #999;
    font-size: 12px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 4px;

    strong {
      display: flex;
      align-items: center;
      gap: 3px;
      margin-bottom: 5px;
    }

    small {
      font-size: 10px;
      color: #999;
    }
  }

  label:before{
    content: '';
    position: absolute;
    height: 10px;
    width:  10px;
    right: 5px;
    top: 5px;
    border-radius: 50%;
    background-color: #ccc;
  }

  input[type="radio"]:checked + label {
    background-color: ${props => props.theme.primary['800']};
    color: #fff;
    border: none;

    small, strong {
      color: #fff;
    }
  }

  input[type="radio"]:checked + label:before {
    background-color: #fff;
  }
`;