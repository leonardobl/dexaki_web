import styled from "styled-components";

export const WrapperProduct = styled.div`
  .header-product-image {
    width: 100%;
    /* background-color: #ddd; */
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 210px;
      z-index: 1;
    
    }

    > button {
      position: absolute;
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
      z-index: 20;

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

  .content-textarea {
    padding: 0 20px;
    margin-top: 20px;

    p {
      font-weight: 600;
      margin-bottom: 10px;
      color: #222;
    }

    textarea {
      width: 100%;
      border-radius: 6px;
      
      min-height: 100px;
      border-color: #ccc;
      padding: 10px;
      font-weight: 300;
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

    .price {
     
      min-width: 50px;
      p {
        font-size: 13px;
        color: #666;
      }

      span {
        text-wrap: nowrap;
        font-size: 14px;
        font-weight: 600;
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      /* border: 1px solid #ccc; */
      border-radius: 6px;
      height: 47px;

      gap: 10px;

      button {
        background-color: transparent;
        border: none;
        font-size: 30px;
        padding: 6px;
        height: fit-content;
        color: #FF6B00;
      }

      span {
        font-size: 22px;
      }
    }

    .button-add {
      width: 100%;
      height: fit-content;
      background-color: #FF6B00;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      border: none;
      padding: 16px 0;
      border-radius: 6px;

      cursor: pointer;
    }
  }
`

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