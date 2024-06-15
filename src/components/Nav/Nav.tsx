import { useState } from 'react';
import * as S from './styles'
import { IconDestaque, IconHome, IconPedidos, IconPerfil } from './Icons';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const [activeNow, setActiveNow] = useState("home");
  const navigate = useNavigate()

  function isActive(name: string) {
    return activeNow === name ? '#FF6B00' : '#666666'
  }


  return (
    <S.WrapperNav>
      <S.ContentLink isActive={activeNow == "home" ? true : false}>
        <S.Link
          isActive={activeNow == "home" ? true : false}
          onClick={() => setActiveNow("home")}
        // href="#"
        >
          <IconHome color={isActive('home')} />
        </S.Link>
        <span>Home</span>
      </S.ContentLink>

      {/* <S.ContentLink isActive={activeNow == "promocoes" ? true : false}>
        <S.Link
          isActive={activeNow == "promocoes" ? true : false}
          onClick={() => setActiveNow("promocoes")}
        // href="#"
        >
          <IconDestaque color={isActive('promocoes')} />
        </S.Link>
        <span>Promoções</span>
      </S.ContentLink> */}

      <S.ContentLink isActive={activeNow == "pedidos" ? true : false}>
        <S.Link
          isActive={activeNow == "pedidos" ? true : false}
          onClick={() => setActiveNow("pedidos")}
        // href="#"
        >
          <IconPedidos color={isActive('pedidos')} />

        </S.Link>
        <span>Pedidos</span>
      </S.ContentLink>

      <S.ContentLink
        onClick={() => navigate('/myprofile')}
        isActive={activeNow == "usuario" ? true : false}
      >
        <S.Link
          isActive={activeNow == "usuario" ? true : false}
          onClick={() => setActiveNow("usuario")}
        // href="#"
        >
          <IconPerfil color={isActive('usuario')} />
        </S.Link>
        <span>Perfil</span>
      </S.ContentLink>
    </S.WrapperNav>
  )
}

