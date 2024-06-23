
import { useNavigate } from 'react-router-dom'
import { IconArrowLeft } from '../../assets/icons/IconArrowLeft'
// import { IconNotification } from '../../assets/icons/IconNotification'

import { TbChefHat } from "react-icons/tb";
import { FaRegClock } from "react-icons/fa";
import { GiStorkDelivery } from "react-icons/gi";

import * as S from './styles'
import { Template } from '../../template/Template';

export const Notification = () => {
  const navigate = useNavigate()

  // 'WAITING', 'IN_PRODUCTION', 'DONE'
  // function parsStatus(status: string) {
  //   switch (status) {
  //     case 'WAITING':
  //       return '#D73035';
  //     case 'IN_PRODUCTION':
  //       return '#FFA500';
  //     case 'DONE':
  //       return '#30D787'
  //   }
  // }



  return (
    <Template>

      <S.Wrapper>
        <S.Header onClick={() => navigate('/')}>
          <IconArrowLeft />
          <h1>Notificação</h1>
        </S.Header>

        <S.Body>
          {/* <S.ContentNotification>
          <IconNotification />
          <p>Você não possui nenhuma notificação no momento</p>
        </S.ContentNotification> */}

          <S.NotificationItem>
            <div className='left-box'>
              <S.Icon>
                <FaRegClock />
              </S.Icon>
              <div>
                <h3>Pedido #43</h3>
                <p>Fila de espera</p>
              </div>
            </div>

            <div className='right-box'>
              <p>Há 5 minutos</p>
              <S.StatusItem status='#D73035'></S.StatusItem>
            </div>
          </S.NotificationItem>

          <S.NotificationItem>
            <div className='left-box'>
              <S.Icon>
                <TbChefHat />
              </S.Icon>
              <div>
                <h3>Pedido #12</h3>
                <p>Entrou em produção</p>
              </div>
            </div>

            <div className='right-box'>
              <p>Há 5 minutos</p>
              <S.StatusItem status={'#FFA500'}></S.StatusItem>
            </div>
          </S.NotificationItem>


          <S.NotificationItem>
            <div className='left-box'>
              <S.Icon>
                <GiStorkDelivery />
              </S.Icon>
              <div>
                <h3>Pedido #43</h3>
                <p>Saiu para entrega</p>
              </div>
            </div>

            <div className='right-box'>
              <p>Há 5 minutos</p>
              <S.StatusItem status={'#30D787'}></S.StatusItem>
            </div>
          </S.NotificationItem>

        </S.Body>



      </S.Wrapper>
    </Template>
  )
}

