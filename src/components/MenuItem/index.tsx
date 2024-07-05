import { ComponentProps } from "react";
import * as S from "./styles";
import { IDataProducts } from "../../Mocks/productsMock";
import { maskMoney } from "../../Util/masks";
import { useAppContext } from "../../context/AppContext";
import { IconPlus } from "../../assets/icons/IconPlus";
import { useMenuItem } from "./useMenuItem";

interface IMenuItemPros extends ComponentProps<"div"> {
  product: IDataProducts;
}

export const MenuItem = ({ product, ...rest }: IMenuItemPros) => {
  const { addBagProduct } = useAppContext();
  const { navigate } = useMenuItem();

  return (
    <S.Container {...rest}>
      <S.WrapperContent onClick={() => navigate(`/product/${product.id}`)}>
        <S.WrapperImage>
          <img src={product?.img} alt="imagem produto" />
        </S.WrapperImage>
        <S.WrapperText>
          <h4>{product?.name}</h4>
          <span>{product?.description}</span>
          <p>{maskMoney(product?.price)}</p>
        </S.WrapperText>
      </S.WrapperContent>

      <S.WrapperAction>
        <button type="button" onClick={() => addBagProduct(product)}>
          <IconPlus />
        </button>
      </S.WrapperAction>
    </S.Container>
  );
};
