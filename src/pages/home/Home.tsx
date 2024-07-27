import * as S from "./styles";
import { useHome } from "./useHome";
import { MenuItem } from "../../components/MenuItem";
import { MainMenu } from "../../components/MainMenu";
import { Nav } from "../../components/Nav/Nav";

export const Home = () => {
  const { dataProducts } = useHome();

  return (
    <S.Container>
      <MainMenu categorys={dataProducts.map((i) => i.category)} />
      <S.Wrapper>
        <S.WrapperItens>
          {dataProducts?.length > 0 &&
            dataProducts.map((cat) => (
              <S.BodyItens key={`${Math.random()}`} id={`${cat.category.name}`}>
                <S.ContentItens>
                  {cat.products.map((i) => (
                    <MenuItem product={i} key={`${Math.random()}`} />
                  ))}
                </S.ContentItens>
              </S.BodyItens>
            ))}
        </S.WrapperItens>
      </S.Wrapper>
      <Nav />
    </S.Container>
  );
};
