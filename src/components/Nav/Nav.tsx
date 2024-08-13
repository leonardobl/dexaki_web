import * as S from "./styles";
import { IconHome, IconPedidos, IconPerfil } from "./Icons";
import { NavLink } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { useNav } from "./useNav";
import { maskMoney } from "../../Util/masks.ts";

export const Nav = () => {
  const { navigate, total, dataDelivery } = useNav();
  return (
    <S.WrapperNav>
      {/* Quando tiver item na sacola exibir este component */}

      {dataDelivery.products?.length > 0 && (
        <S.Bag onClick={() => navigate("/bag")}>
          <S.IconBag>
            <IoBagCheckOutline
              color="#fff"
              size={20}
              style={{ marginRight: "30px" }}
            />
            <span className="number-item">{dataDelivery.products?.length}</span>
          </S.IconBag>
          <small>Ver Sacola</small>
          <p>{maskMoney(total)}</p>
        </S.Bag>
      )}

      <S.ContentLink>
        <NavLink to={"/"}>
          <IconHome />
          <span>Início</span>
        </NavLink>

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
