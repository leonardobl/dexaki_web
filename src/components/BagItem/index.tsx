import * as S from "./styles";
import { ComponentProps } from "react";
import { maskMoney } from "../../util/masks";
import { FaTrash } from "react-icons/fa";

import { IProductsCart } from "../../model/Product";


interface IBagItemProps extends ComponentProps<"div"> {
  product: IProductsCart;
  addQuantity: (product: IProductsCart) => void;
  lessQuantity: (product: IProductsCart) => void
}

export const BagItem = ({ product, addQuantity, lessQuantity, ...rest }: IBagItemProps) => {

  return (
    <S.Container {...rest}>
      <div className="content-left">
        <div>
          <img className="img" src={product?.img} alt="imagem do produto" />
        </div>
        <div className="description">
          <p>{product?.name}</p>
          <span>{product?.description}</span>
          <strong>{maskMoney(product?.price)}</strong>

          <div className="content-itens">
            <div>
              <p>1</p>
              <span> Refrigerante</span>
            </div>

            <div>
              <p>1</p>
              <span> Batata Fritas</span>
            </div>
          </div>
        </div>
      </div>


      <S.ContentButton {...rest}>
        {product.quantity > 1 ? (<button onClick={() => lessQuantity(product)}>
          {" "}
          -{" "}
        </button>) : (<FaTrash color="#FF6B00" size={12} onClick={() => lessQuantity(product)} />)}

        <span>{product.quantity}</span>

        <button onClick={() => addQuantity(product)}>
          {" "}
          +{" "}
        </button>
      </S.ContentButton>
    </S.Container>
  );
};
