import { useState } from 'react';
import * as S from './styles'
import { AiOutlineHome } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { FaFire } from "react-icons/fa";

export const Nav = () => {
  const [activeNow, setActiveNow] = useState("home");


  return (
    <S.WrapperNav>
      <S.ContentLink isActive={activeNow == "home" ? true : false}>
        <S.Link
          isActive={activeNow == "home" ? true : false}
          onClick={() => setActiveNow("home")}
        // href="#"
        >
          <AiOutlineHome size={15} color={activeNow == "home" ? '#fff' : '#333'} />
        </S.Link>
        <span>Home</span>
      </S.ContentLink>

      <S.ContentLink isActive={activeNow == "promocoes" ? true : false}>
        <S.Link
          isActive={activeNow == "promocoes" ? true : false}
          onClick={() => setActiveNow("promocoes")}
        // href="#"
        >
          <FaFire size={15} color={activeNow == "promocoes" ? '#fff' : '#333'} />
        </S.Link>
        <span>Promoções</span>
      </S.ContentLink>

      <S.ContentLink isActive={activeNow == "pedidos" ? true : false}>
        <S.Link
          isActive={activeNow == "pedidos" ? true : false}
          onClick={() => setActiveNow("pedidos")}
        // href="#"
        >
          <GrCart size={15} color={activeNow == "pedidos" ? '#fff' : '#333'} />

        </S.Link>
        <span>Pedidos</span>
      </S.ContentLink>

      <S.ContentLink isActive={activeNow == "usuario" ? true : false}>
        <S.Link
          isActive={activeNow == "usuario" ? true : false}
          onClick={() => setActiveNow("usuario")}
        // href="#"
        >
          <LuUser2 size={15} color={activeNow == "usuario" ? '#fff' : '#333'} />
        </S.Link>
        <span>Perfil</span>
      </S.ContentLink>
    </S.WrapperNav>
  )
}

