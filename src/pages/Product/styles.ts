import styled from "styled-components";

export const WrapperProduct = styled.div`
  .header-product-image {
    width: 100%;
    height: 300px;
    background-color: #ddd;
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 300px;
    }

    button {
      position: relative;
      top: 16px;
      left: 16px;
      background-color: #fff ;
      border-radius: 50%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      cursor: pointer;

      svg, img {
        padding: 0;
        margin: 0;
      }
    }
  }

  .description-product {
    margin-top: 16px;
    padding: 0 20px;

    h4 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 14px;
    }

    .price {
      display: block;
      font-size: 16px;
      color: #333;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .description {
      font-size: 14px;
      color: #666;
    }
  }

  .footer-price {
    position: absolute;
    border-top: 1px solid #cccc;
    width: 100%;
    bottom: 0;
    padding: 16px 20px;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    align-items: center;

    .quantity {
      display: flex;
      align-items: center;
      border: 1px solid #ccc;
      height: 47px;

      gap: 6px;

      button {
        background-color: transparent;
        border: none;
        font-size: 16px;
        padding: 10px;
        height: fit-content;
        color: #ea1d2c;

        
      }
    }

    .button-add {
      width: 100%;
      height: fit-content;
      background-color: #ea1d2c;
      color: #fff;
      font-size: 14px;
      border: none;
      padding: 16px 0;
      border-radius: 6px;

      cursor: pointer;
    }
  }
`