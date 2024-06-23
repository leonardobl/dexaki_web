import { useNavigate } from 'react-router-dom'
import { Nav } from '../../components/Nav/Nav'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import * as S from './styles'

export const Address = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate('/myprofile')}>
        <IconArrowLeft />
        <h1>Endereços</h1>
      </S.Header>

      <S.Body>
        <S.CardMain>
          <TbCurrentLocation size={22} />
          <div>
            <p>Usar minha Localização</p>
            <span>Q.Z. - Vila Maria - Teresina</span>
          </div>
        </S.CardMain>

        <S.Card>
          <div className='content-description'>
            <IoLocationOutline size={30} />

            <div className='description'>
              <p>Rua Muniz de Sousa, 448</p>
              <span>Aclimação</span>
              <span>Teresina/pi</span>
              <span>Em frente ao Loja perez</span>
            </div>
          </div>

          <div>
            <MdOutlineMoreHoriz />
          </div>
        </S.Card>
      </S.Body>
      <Nav />
    </S.Wrapper>
  )
}

