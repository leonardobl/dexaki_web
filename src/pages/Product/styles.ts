import styled from "styled-components";

export const WrapperProduct = styled.div`
  .header-product-image {
    width: 100%;
    /* background-color: #ddd; */
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 240px;
      z-index: 1;
    }

    > button {
      position: absolute;
      top: 16px;
      left: 16px;
      background-color: #fff;
      border-radius: 50%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;
      z-index: 20;

      svg,
      img {
        padding: 0;
        margin: 0;
      }
    }
  }

  .description-product {
    margin-top: 16px;
    padding: 0 20px;

    h4 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 14px;
    }

    .content-price {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-top: 10px;

      span {
        color: #999;
        text-decoration: line-through;
        font-weight: 500;
      }

      .price {
        display: block;
        font-size: 16px;
        color: #57a84e;
        font-weight: 600;
      }
    }

    .description {
      font-size: 14px;
      color: #666;
    }
  }

  .content-textarea {
    padding: 0 20px;
    margin-top: 20px;

    > p {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 10px;
      color: #999;

      display: flex;
      align-items: center;
      gap: 4px;
    }

    textarea {
      width: 100%;
      border-radius: 6px;

      min-height: 100px;
      border-color: #ccc;
      padding: 10px;
      font-weight: 300;
      font-size: 12px;
    }

    .number-caracter {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 5px;

      p {
        font-weight: 300;
        font-size: 12px;
      }
    }
  }

  .footer-price {
    position: fixed;
    border-top: 1px solid #cccc;
    width: 100%;
    bottom: 0;
    padding: 10px 20px;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;

    .quantity {
      border: 1px solid #ddd;
      padding: 0px 13px;
      display: flex;
      align-items: center;
      border-radius: 3px;
      height: 40px;

      gap: 10px;

      button {
        background-color: transparent;
        border: none;
        font-size: 30px;
        padding: 0px 4px;
        height: fit-content;
        color: #ff6b00;
      }

      span {
        font-size: 22px;
      }
    }

    button {
      height: 40px !important;
      font-weight: 500;
      display: flex;
      align-items: center;
      padding: 0 16px;
      justify-content: space-between;

      p {
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const WrapperModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    color: #999;
    font-weight: 600;
    text-align: center;
  }
`;

export const Promo = styled.div`
  background-color: #57a84e;
  border-radius: 16px;
  padding: 3px 10px;
  width: fit-content;
  margin-top: 10px;

  p {
    color: #fff;
    font-size: 12px;
  }
`;
