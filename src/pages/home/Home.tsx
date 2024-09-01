import * as S from "./styles";
import { useHome } from "./useHome";
import { MenuItem } from "../../components/MenuItem";
import { NewLayout } from "../NewLayout";

export const Home = () => {
  const { dataProducts } = useHome();

  return (
    <NewLayout categorys={dataProducts?.map((i) => i.category)}>
      <S.Container>
        <S.Wrapper>
          <S.Main>
            <p>Mais pedidos 🤤🔥</p>

            <S.WrapperMainItens>

              <S.ContentItem >
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" alt="" />
                <S.DescriptionItem>
                  <p>Combo 2x TOP + Bata fritas + Hamburguer top</p>
                  <div className="price">
                    <span>R$ 124,00</span>
                    <p>R$ 120,00</p>
                  </div>
                </S.DescriptionItem>
              </S.ContentItem>

              <S.ContentItem >
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" alt="" />
                <S.DescriptionItem>
                  <p>Combo 2x TOP + Bata fritas + Hamburguer top</p>
                  <div className="price">
                    <span>R$ 124,00</span>
                    <p>R$ 120,00</p>
                  </div>
                </S.DescriptionItem>
              </S.ContentItem>

              <S.ContentItem >
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" alt="" />
                <S.DescriptionItem>
                  <p>Combo 2x TOP + Bata fritas + Hamburguer top</p>
                  <div className="price">
                    <span>R$ 124,00</span>
                    <p>R$ 120,00</p>
                  </div>
                </S.DescriptionItem>
              </S.ContentItem>

              <S.ContentItem>
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" alt="" />
                <S.DescriptionItem>
                  <p>Combo 2x Premmium + Bata fritas</p>
                  <div className="price">
                    <span>R$ 124,00</span>
                    <p>R$ 120,00</p>
                  </div>
                </S.DescriptionItem>
              </S.ContentItem>

              <S.ContentItem>
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" alt="" />
                <S.DescriptionItem>
                  <p>Combo 2x Premmium + Bata fritas</p>
                  <div className="price">
                    <span>R$ 124,00</span>
                    <p>R$ 120,00</p>
                  </div>
                </S.DescriptionItem>
              </S.ContentItem>

              <S.ContentItem>
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg" alt="" />
                <S.DescriptionItem>
                  <p>Combo 2x Premmium + Bata fritas</p>
                  <div className="price">
                    <span>R$ 124,00</span>
                    <p>R$ 120,00</p>
                  </div>
                </S.DescriptionItem>
              </S.ContentItem>

            </S.WrapperMainItens>


          </S.Main>
          {dataProducts?.length > 0 ? (
            dataProducts?.map((cat) => (
              <S.BodyItens
                key={`${Math.random()}`}
                id={`${cat?.category?.name}`}
              >
                <S.ContentItens>
                  {cat?.products?.map((i) => (
                    <MenuItem product={i} key={`${Math.random()}`} />
                  ))}
                </S.ContentItens>
              </S.BodyItens>
            ))
          ) : (
            <S.NotFoundItensText>Nenhum item encontrado</S.NotFoundItensText>
          )}
        </S.Wrapper>
      </S.Container>
    </NewLayout>
  );
};
