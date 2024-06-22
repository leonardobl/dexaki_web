
import * as S from './styles'
import { IconHome, IconPedidos, IconPerfil } from './Icons';
import { NavLink } from 'react-router-dom';

export const Nav = () => {

  return (
    <S.WrapperNav>

      <NavLink to={'/'}>
        <IconHome />
        <span>Home</span>
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

