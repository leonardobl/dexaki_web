import { ComponentProps } from "react";
import * as S from "./styles";
import { IDataProducts } from "../../Mocks/productsMock";
import { maskMoney } from "../../util/masks.ts";
import { useMenuItem } from "./useMenuItem";

interface IMenuItemPros extends ComponentProps<"div"> {
  product: IDataProducts;
}

export const MenuItem = ({ product, ...rest }: IMenuItemPros) => {
  const { navigate } = useMenuItem();

  return (
    <S.Container {...rest}>
      <S.WrapperContent onClick={() => navigate(`/product/${product.id}`)}>
        <S.Cashback>
          <p>15% Cashback</p>
        </S.Cashback>
        <S.WrapperImage>
          <img src={product?.img} alt="imagem produto" />
        </S.WrapperImage>
        <S.WrapperText>
          <h4>{product?.name}</h4>
          <span>{product?.description}</span>
          <S.Price>
            <span>R$ 50,00</span>
            <p>{maskMoney(product?.price)}</p>
          </S.Price>

        </S.WrapperText>
      </S.WrapperContent>
    </S.Container>
  );
};
