import { FaTrash } from "react-icons/fa";
import * as S from "./styles";
import { ComponentProps } from "react";
import { IDataGetProducts } from "../../Mocks/productsMock";
import { maskMoney } from "../../Util/masks";

interface IBagItemProps extends ComponentProps<"div"> {
  product: IDataGetProducts;
}

export const BagItem = ({ product, ...rest }: IBagItemProps) => {
  return (
    <S.Container {...rest}>
      <div className="content-left">
        <div className="img"></div>
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
      <div className="option">
        <FaTrash color="#FF6B00" size={12} />

        <span>1</span>

        <span> + </span>
      </div>
    </S.Container>
  );
};
