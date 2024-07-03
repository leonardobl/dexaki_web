import { useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IconPlus } from "../../assets/icons/IconPlus";

import { CiPizza } from "react-icons/ci";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDrink } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { Template } from "../../template/Template";
import { useHome } from "./useHome";
import { NavHashLink } from "react-router-hash-link";

export const Home = () => {
  const { burgers, pizzas } = useHome();
  const [activeNow, setActiveNow] = useState("Pizzas");
  const navigate = useNavigate();

  function addProduct(item: number) {
    navigate(`/product/${item}`);
  }

  return (
    <Template>
      <S.Wrapper>
        <S.WrapperHeader>
          <S.Header>
            <S.ContentLogo>
              <S.Logo></S.Logo>
              <h4>Chicago Burguers</h4>
            </S.ContentLogo>

            <S.Notification onClick={() => navigate("/notification")}>
              <IoMdNotificationsOutline color="#333333" size={23} />
              <div className="notification"></div>
            </S.Notification>
          </S.Header>

          <S.WrapperInfo>
            <S.ContentInfo>
              <p>Aberto hoje às 17h30</p>
              <span></span>
              <p>Pedido min R$ 7,00</p>
            </S.ContentInfo>

            <p onClick={() => navigate("/profileCompany")}>Perfil da Loja</p>
          </S.WrapperInfo>

          <S.MenuTab>
            <ul>
              {/* <S.Link
                isActive={activeNow == "Pizzas" ? true : false}
                onClick={() => setActiveNow("Pizzas")}
                href="#Pizzas"
              > */}
              <NavHashLink smooth={true} to={"#Pizzas"}>
                <li>
                  <div>
                    <CiPizza size={18} />
                  </div>
                  <p>Pizzas</p>
                </li>
              </NavHashLink>
              {/* </S.Link> */}

              {/* <S.Link
                isActive={activeNow == "Hamburguer" ? true : false}
                // onClick={() => setActiveNow("Hamburguer")}
                // href="#Hamburguer"
              > */}
              <NavHashLink smooth={true} to={"#Hamburguer"}>
                <li>
                  <div>
                    <LiaHamburgerSolid size={18} />
                  </div>
                  <p>Hamburguer</p>
                </li>
              </NavHashLink>
              {/* </S.Link> */}

              <S.Link
                isActive={activeNow == "Bebidas" ? true : false}
                onClick={() => setActiveNow("Bebidas")}
                href="#Bebidas"
              >
                <li>
                  <div>
                    <BiDrink size={18} />
                  </div>
                  <p>Bebidas</p>
                </li>
              </S.Link>

              <S.Link
                isActive={activeNow == "Combos" ? true : false}
                onClick={() => setActiveNow("Combos")}
                href="#Combos"
              >
                <li>
                  <div>
                    <IoFastFoodOutline size={18} />
                  </div>
                  <p>Combos</p>
                </li>
              </S.Link>
            </ul>
          </S.MenuTab>
        </S.WrapperHeader>

        <S.WrapperItens>
          <S.BodyItens id="Pizzas">
            <S.ContentItens>
              {pizzas?.length > 0 &&
                pizzas.map((p) => (
                  <S.Item key={p.id} onClick={() => addProduct(1)}>
                    <div className="content-image">
                      <img src={p.image} alt="img produto" />
                    </div>
                    <div className="description">
                      <S.TitleItem>{p.restaurantChain}</S.TitleItem>
                      <S.Description>
                        <p>{p.title}</p>
                      </S.Description>

                      <div>
                        <S.Price>R$ 29,00</S.Price>
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
              {burgers?.length > 0 &&
                burgers.map((b) => (
                  <S.Item key={b.id} onClick={() => addProduct(1)}>
                    <div className="content-image">
                      <img src={b.image} alt="img produto" />
                    </div>
                    <div className="description">
                      <S.TitleItem>{b.restaurantChain}</S.TitleItem>
                      <S.Description>
                        <p>{b.title}</p>
                      </S.Description>

                      <div>
                        <S.Price>R$ 29,00</S.Price>
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
    </Template>
  );
};
