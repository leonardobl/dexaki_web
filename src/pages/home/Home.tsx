import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { IconPlus } from "../../assets/icons/IconPlus";
// import { Template } from "../../template/Template";
import { useHome } from "./useHome";
import { maskMoney } from "../../Util/masks";
import { Layout } from "../Layout";

export const Home = () => {
  const { DataPizzas, DataBurgers } = useHome();

  const navigate = useNavigate();

  function addProduct(item: number) {
    navigate(`/product/${item}`);
  }

  return (
    <Layout>
      <S.Wrapper>
        <S.WrapperItens>
          <S.BodyItens id="Pizzas">
            <S.ContentItens>
              {DataPizzas?.length > 0 &&
                DataPizzas.map((p) => (
                  <S.Item key={p.id} onClick={() => addProduct(1)}>
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
              {DataBurgers?.length > 0 &&
                DataBurgers.map((b) => (
                  <S.Item key={b.id} onClick={() => addProduct(1)}>
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
