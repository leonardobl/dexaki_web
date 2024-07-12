import * as S from "./styles";
// import { Template } from "../../template/Template";
import { useHome } from "./useHome";
import { Layout } from "../Layout";
import { MenuItem } from "../../components/MenuItem";

export const Home = () => {
  const { products } = useHome();

  return (
    <Layout>
      <S.Wrapper>
        <S.WrapperItens>
          <S.BodyItens id="Pizzas">
            <S.ContentItens>
              {products?.length > 0 &&
                products
                  .filter((i) => i.category === "pizza")
                  .map((p) => <MenuItem product={p} key={p.id} />)}
            </S.ContentItens>
          </S.BodyItens>

          <S.BodyItens id="Hamburguer">
            <S.ContentItens>
              {products?.length > 0 &&
                products
                  .filter((i) => i.category === "burger")
                  .map((b) => <MenuItem product={b} key={b.id} />)}
            </S.ContentItens>
          </S.BodyItens>
        </S.WrapperItens>
      </S.Wrapper>
    </Layout>
  );
};
