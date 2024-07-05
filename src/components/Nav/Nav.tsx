import * as S from "./styles";
import { IconHome, IconPedidos, IconPerfil } from "./Icons";
import { NavLink } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { useNav } from "./useNav";
import { maskMoney } from "../../Util/masks";

export const Nav = () => {
  const { navigate, total } = useNav();

  return (
    <S.WrapperNav>
      {/* Quando tiver item na sacola exibir este component */}
      <S.Bag onClick={() => navigate("/bag")}>
        <IoBagCheckOutline
          color="#fff"
          size={18}
          style={{ marginRight: "30px" }}
        />
        <small>Ver Sacola</small>
        <p>{maskMoney(total)}</p>
      </S.Bag>

      <S.ContentLink>
        <NavLink to={"/"}>
          <IconHome />
          <span>Início</span>
        </NavLink>

        {/* <NavLink to={'/'}>
          <IconDestaque color={isActive('promocoes')} />
        <span>Promoções</span>
      </NavLink> */}

        <NavLink to={"/orders"}>
          <IconPedidos />
          <span>Pedidos</span>
        </NavLink>

        <NavLink to={"/myprofile"}>
          <IconPerfil />
          <span>Perfil</span>
        </NavLink>
      </S.ContentLink>
    </S.WrapperNav>
  );
};
