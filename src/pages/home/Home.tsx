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
