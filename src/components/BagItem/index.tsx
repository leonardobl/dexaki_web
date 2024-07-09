import * as S from "./styles";
import { ComponentProps } from "react";
import { IDataGetProducts } from "../../Mocks/productsMock";
import { maskMoney } from "../../Util/masks";
import { InputAddItem } from "../InputAddItem";
import { useAppContext } from "../../context/AppContext";

interface IBagItemProps extends ComponentProps<"div"> {
  product: IDataGetProducts;
}

export const BagItem = ({ product, ...rest }: IBagItemProps) => {
  const { handleRemoveBagItem } = useAppContext();

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

      <InputAddItem
        onRemove={() => handleRemoveBagItem(product.id)}
        productDefault={product?.quantity}
      />
    </S.Container>
  );
};
