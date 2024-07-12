import * as S from "./styles";
import { ComponentProps } from "react";
import { maskMoney } from "../../Util/masks";
import { FaTrash } from "react-icons/fa";
import { useBagItem } from "./useBagItem";
import { IProductsCart } from "../../model/Product";


interface IBagItemProps extends ComponentProps<"div"> {
  product: IProductsCart;
}

export const BagItem = ({ product, ...rest }: IBagItemProps) => {
  const { addQuantity } = useBagItem()


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
        <FaTrash color="#FF6B00" size={12} />

        <span>{product.quantity}</span>

        <button onClick={() => addQuantity(product)}>
          {" "}
          +{" "}
        </button>
      </S.ContentButton>
    </S.Container>
  );
};
