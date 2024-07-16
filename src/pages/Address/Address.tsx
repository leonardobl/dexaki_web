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
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export const Address = () => {
  const { modalAdress, showModalAdress, setShowModalAdress, navigate } = useAdress()

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
            <S.Card >
              <div className='content-description'>

                <IoLocationOutline size={30} />


                <div className='description'>
                  <p>Rua Muniz de Sousa, 448</p>
                  <span>Aclimação</span>
                  <span>Teresina/pi</span>
                  <span>Em frente ao Loja perez</span>
                </div>
              </div>

              <div onClick={() => modalAdress()}>
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
          <S.DescriptionAdress>
            <div className='description'>
              <IoLocationOutline size={30} />
              <div>
                <strong>Casa Z, 448</strong>
                <p>R.Engenheiro Davi Caldas, 245, Bloco 1 ap 09</p>
                <p>Próximo ao comercial didi</p>
              </div>
            </div>
            <div className="content-btn">
              <Button variant='outlined'><FaTrash />Excluir</Button>
              <Button onClick={() => navigate('/editAdress')}>
                <MdEdit />
                Editar
              </Button>
            </div>
          </S.DescriptionAdress>
        </ModalBottom>

      </S.Wrapper>
    </Template>
  )
}

