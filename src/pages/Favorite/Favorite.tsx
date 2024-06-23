import { Nav } from '../../components/Nav/Nav'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { CiHeart } from "react-icons/ci";

import * as S from './styles'
import { useNavigate } from 'react-router-dom';

export const Favorite = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/myprofile')}>
        <IconArrowLeft />
        <h1>Favoritos</h1>
      </S.Header>



      <S.Body>
        <S.anyFavorite>
          <h3>Você não tem nenhum item</h3>
          <p>Toque no <CiHeart size={22} /> para salvar seus Pedidos</p>
        </S.anyFavorite>
      </S.Body>
      <Nav />
    </S.Wrapper>
  )
}

