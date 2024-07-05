import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { IconPlus } from "../../assets/icons/IconPlus";
// import { Template } from "../../template/Template";
import { useHome } from "./useHome";
import { maskMoney } from "../../Util/masks";
import { Layout } from "../Layout";

export const Home = () => {
  const { DataProducts } = useHome();

  const navigate = useNavigate();

  return (
    <Layout>
      <S.Wrapper>
        <S.WrapperItens>
          <S.BodyItens id="Pizzas">
            <S.ContentItens>
              {DataProducts?.length > 0 &&
                DataProducts.filter((i) => i.category === "pizza").map((p) => (
                  <S.Item
                    key={p.id}
                    onClick={() => navigate(`/product/${p.id}`)}
                  >
                    <div className="content-image">
                      <img src={p.img} alt="img produto" />
                    </div>
                    <div className="description">
                      <S.TitleItem>{p.name}</S.TitleItem>
                      <S.Description>
                        <p>{p.description}</p>
                      </S.Description>

                      <div>
                        <S.Price>{maskMoney(p.price)}</S.Price>
                        <IconPlus />
                      </div>
                    </div>
                    <div className="border-right"></div>
                  </S.Item>
                ))}
            </S.ContentItens>
          </S.BodyItens>

          <S.BodyItens id="Hamburguer">
            <S.ContentItens>
              {DataProducts?.length > 0 &&
                DataProducts.filter((i) => i.category === "burger").map((b) => (
                  <S.Item
                    key={b.id}
                    onClick={() => navigate(`/product/${b.id}`)}
                  >
                    <div className="content-image">
                      <img src={b.img} alt="img produto" />
                    </div>
                    <div className="description">
                      <S.TitleItem>{b.name}</S.TitleItem>
                      <S.Description>
                        <p>{b.description}</p>
                      </S.Description>

                      <div>
                        <S.Price>{maskMoney(b.price)}</S.Price>
                        <IconPlus />
                      </div>
                    </div>

                    <div className="border-right"></div>
                  </S.Item>
                ))}
            </S.ContentItens>
          </S.BodyItens>
        </S.WrapperItens>
      </S.Wrapper>
    </Layout>
  );
};
