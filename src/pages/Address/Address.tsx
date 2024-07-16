import { useNavigate } from 'react-router-dom'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { TbCurrentLocation } from "react-icons/tb";
import * as S from './styles'
import { Template } from '../../template/Template';
import { GoHome } from "react-icons/go";
import { BsBuildings } from "react-icons/bs";
import { Button } from '../../components/Button/Button';
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { ModalBottom } from '../../components/ModalBottom';
import { useAdress } from './useAdress';


export const Address = () => {
  const navigate = useNavigate()


  const { modalAdress, showModalAdress, setShowModalAdress } = useAdress()

  return (
    <Template>

      <S.Wrapper>
        <S.Header onClick={() => navigate('/myprofile')}>
          <IconArrowLeft />
          <h1>Endereços</h1>
        </S.Header>

        <S.HeaderAdress>
          <Button variant='outlined' >
            Adicionar novo Entreço
            <MdOutlineAddLocationAlt size={20} />
          </Button>
        </S.HeaderAdress>

        <S.Body>
          <S.CardMain>
            <TbCurrentLocation size={22} />
            <div>
              <p>Usar minha Localização</p>
              <span>Q.Z. - Vila Maria - Teresina</span>
            </div>
          </S.CardMain>

          <S.ContentCardAdress>
            <S.Card onClick={() => modalAdress()}>
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

            <S.Card>
              <div className='content-description'>
                <GoHome size={30} />

                <div className='description'>
                  <p>Casa Z, 448</p>
                  <span>Aclimação</span>
                  <span>Teresina/pi</span>
                  <span>Em frente ao Loja perez</span>
                </div>
              </div>

              <div>
                <MdOutlineMoreHoriz />
              </div>
            </S.Card>

            <S.Card>
              <div className='content-description'>
                <BsBuildings size={30} />

                <div className='description'>
                  <p>Condomínio Terrazzo, 448</p>
                  <span>Aclimação</span>
                  <span>Teresina/pi</span>
                  <span>Em frente ao Loja perez</span>
                </div>
              </div>

              <div>
                <MdOutlineMoreHoriz />
              </div>
            </S.Card>


          </S.ContentCardAdress>
        </S.Body>

        <ModalBottom isOpen={showModalAdress} onClose={() => setShowModalAdress(!showModalAdress)}>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
          <p>editar</p>
        </ModalBottom>

      </S.Wrapper>
    </Template>
  )
}

