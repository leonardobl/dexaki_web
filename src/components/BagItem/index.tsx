import * as S from "./styles";
import { ComponentProps } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { IProduct } from "../../model/Product";
import { maskMoney } from "../../Util/masks.ts";

interface IBagItemProps extends ComponentProps<"div"> {
  product: IProduct;
  addQuantity: (product: IProduct) => void;
  lessQuantity: (product: IProduct) => void;
}

export const BagItem = ({
  product,
  addQuantity,
  lessQuantity,
  ...rest
}: IBagItemProps) => {
  return (
    <S.Container {...rest}>
      <div className="content-left">
        <div>
          <img
            className="img"
            // src={`${import.meta.env.VITE_API_URL}/uploads/${product?.imagePath}`}
            src={`${product?.imagePath}`}
            alt="imagem do produto"
          />
        </div>

        <div className="description">
          <p>{product?.name}</p>
          <S.DescriptionText>{product?.description}</S.DescriptionText>
          <strong>{maskMoney(product?.price)}</strong>
          <div className="content-itens">
            <div>
              <p>{product?.quantity}</p>
              <span>Refrigerante</span>
            </div>

            <div>
              <p>1</p>
              <span>Batata Fritas</span>
            </div>
          </div>
        </div>
      </div>

      <S.ContentButton {...rest}>
        {product.quantity > 1 ? (
          <TiMinus size={16} onClick={() => lessQuantity(product)} />
        ) : (
          <FaTrash
            color="#FF6B00"
            size={16}
            onClick={() => lessQuantity(product)}
          />
        )}

        <span>{product.quantity}</span>

        <TiPlus size={16} onClick={() => addQuantity(product)} />
      </S.ContentButton>
    </S.Container>
  );
};
