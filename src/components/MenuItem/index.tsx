import { ComponentProps } from "react";
import * as S from "./styles";
import { maskMoney } from "../../Util/masks.ts";
import { useMenuItem } from "./useMenuItem";
import { IProductDTO } from "../../types/product";

interface IMenuItemPros extends ComponentProps<"div"> {
  product: IProductDTO;
}

export const MenuItem = ({ product, ...rest }: IMenuItemPros) => {
  const { navigate } = useMenuItem();

  return (
    <S.Container {...rest}>
      <S.WrapperContent onClick={() => navigate(`/product/${product.id}`)}>
        <S.WrapperImage>
          <img
            src={`${import.meta.env.VITE_API_URL}/uploads/${
              product?.image.filename
            }`}
            alt="imagem produto"
          />
        </S.WrapperImage>
        <S.WrapperText>
          <h4>{product?.name}</h4>
          <span>{product?.description}</span>
          <S.Price>
            <span>{maskMoney(product?.price + 5)}</span>
            <p>{maskMoney(product?.price)}</p>
          </S.Price>
        </S.WrapperText>
        <S.Cashback>
          <p>15% Cashback</p>
        </S.Cashback>
      </S.WrapperContent>
    </S.Container>
  );
};
