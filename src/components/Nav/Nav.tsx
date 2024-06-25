
import * as S from './styles'
import { IconHome, IconPedidos, IconPerfil } from './Icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoBagCheckOutline } from "react-icons/io5";

export const Nav = () => {
  const navigate = useNavigate()
  return (
    <S.WrapperNav>

      {/* Quando tiver item na sacola exibir este component */}
      <S.Bag>
        <IoBagCheckOutline color='#fff' size={18} />
        <small onClick={() => navigate('/bag')}>Ver Sacola</small>
        <p>R$ 24,98</p>
      </S.Bag>

      <NavLink to={'/'}>
        <IconHome />
        <span>Início</span>
      </NavLink>

      {/* <NavLink to={'/'}>
          <IconDestaque color={isActive('promocoes')} />
        <span>Promoções</span>
      </NavLink> */}

      <NavLink to={'/orders'}>
        <IconPedidos />
        <span>Pedidos</span>
      </NavLink>

      <NavLink to={'/myprofile'}>
        <IconPerfil />
        <span>Perfil</span>
      </NavLink>
    </S.WrapperNav>
  )
}

