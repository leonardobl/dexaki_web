import { Nav } from '../../components/Nav/Nav'
import * as S from './styles'
import { IoTicketOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const MyProfile = () => {
  const [isAutenticated, setIsAutenticated] = useState(false)
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      {isAutenticated ? (
        <div>
          <header>
            <S.Profile>

            </S.Profile>
            <h3>Felipe Alves</h3>
          </header>

          <S.Body>
            <S.Card onClick={() => navigate('/cupons')}>
              <div className='content-info'>
                <IoTicketOutline size={24} color='#666' />
                <div>
                  <p>Cupons</p>
                  <span>Meu saldos e Cartões</span>
                </div>
              </div>

              <MdKeyboardArrowRight />
            </S.Card>

            <S.Card onClick={() => navigate('/favorite')}>
              <div className='content-info'>
                <CiHeart size={24} />
                <div>
                  <p>Favoritos</p>
                  <span>Meu pedidos favoritos</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </S.Card>

            <S.Card onClick={() => navigate('/notification')}>
              <div className='content-info'>
                <IoIosNotificationsOutline size={24} />
                <div>
                  <p>Notificações</p>
                  <span>Minha Central de Notificação</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </S.Card>

            <S.Card onClick={() => navigate('/adress')}>
              <div className='content-info'>
                <CiLocationOn size={24} />
                <div >
                  <p>Endereços</p>
                  <span>Meus endereços de entrega</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </S.Card>

            <S.Card>
              <div className='content-info'>
                <CiUser size={24} />
                <div >
                  <p>Dados da Conta</p>
                  <span>MinhaInformações da conta</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </S.Card>

            <S.Card>
              <div className='content-info'>
                <CiCircleQuestion size={24} />
                <div>
                  <p>Ajuda</p>
                  <span>Algumas dúvidas</span>
                </div>
              </div>
              <MdKeyboardArrowRight />
            </S.Card>
          </S.Body>
        </div>
      ) : (

        <S.ContentLogin>
          <h3>Clique abaixo para fazer login</h3>
          <button>Entrar ou se Cadastra-se</button>
        </S.ContentLogin>
      )

      }
      <Nav />
    </S.Wrapper>
  )
}

