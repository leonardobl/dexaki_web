import React from "react";
import * as S from "./styles";
import { CiPizza } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { useMainMenu } from "./useMainMenu";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDrink } from "react-icons/bi";

export const MainMenu = () => {
  const { activeNow, setActiveNow, navigate } = useMainMenu();

  return (
    <S.Container>
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
            <S.Link
              isActive={activeNow == "Pizzas" ? true : false}
              onClick={() => setActiveNow("Pizzas")}
              href="#Pizzas"
            >
              <li>
                <div>
                  <CiPizza size={18} />
                </div>
                <p>Pizzas</p>
              </li>
            </S.Link>

            <S.Link
              isActive={activeNow == "Hamburguer" ? true : false}
              onClick={() => setActiveNow("Hamburguer")}
              href="#Hamburguer"
            >
              <li>
                <div>
                  <LiaHamburgerSolid size={18} />
                </div>
                <p>Hamburguer</p>
              </li>
            </S.Link>

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
    </S.Container>
  );
};
