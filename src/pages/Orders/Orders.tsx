import { Nav } from '../../components/Nav/Nav'
// import { IconNotification } from '../../assets/icons/IconNotification'
import * as S from './styles'

export const Orders = () => {

  function parsStatus(status: string) {
    switch (status) {
      case 'WAITING':
        return { bg: '#D73035', color: '#D73035' }
      case 'IN_PRODUCTION':
        return { bg: 'rgba(215,108,48,.20)', color: '#FFA500' }
      case 'DONE':
        return { bg: 'rgba(48,215,135,.20)', color: '#30D787' }
      case 'FINISHED':
        return { bg: 'rgba(102,102,102,.20)', color: '#666666' }
    }
  }

  return (
    <S.Wrapper>
      <h1>Pedidos</h1>

      <div>
        <h3>Em Andamento</h3>

        <S.CardOrders>
          <div className=''>
            <p>Pedido #45</p>
            <S.Status status={parsStatus('DONE')}>
              <span></span>
              <p>Pronto!</p>
            </S.Status>
          </div>

          <div className="bodyCard">
            <p>
              <span>1X</span>
              Frango com Catupiry
            </p>

            <p>
              <span>1X</span>
              Quatro Queijos
            </p>
          </div>
        </S.CardOrders>

        <S.CardOrders>
          <div className=''>
            <p>Pedido #16</p>
            <S.Status status={parsStatus('IN_PRODUCTION')}>
              <span></span>
              <p>Entrou em produção</p>
            </S.Status>
          </div>

          <div className="bodyCard">
            <p>
              <span>1X</span>
              Frango com Catupiry
            </p>

            <p>
              <span>1X</span>
              Quatro Queijos
            </p>
          </div>
        </S.CardOrders>

        <div style={{ marginTop: '40px' }}>
          <h3>Anteriores</h3>

          <S.CardOrders>
            <div className=''>
              <p>Pedido #22</p>
              <S.Status status={parsStatus('FINISHED')}>
                <span></span>
                <p>Finalizado em 07/12/2022</p>
              </S.Status>
            </div>

            <div className="bodyCard">
              <p>
                <span>1X</span>
                Frango com Catupiry
              </p>

              <p>
                <span>1X</span>
                Quatro Queijos
              </p>
            </div>
          </S.CardOrders>
        </div>
      </div>

      {/* <S.NoOrders>
        <IconNotification />
        <p>Você não possui Pedidos</p>
      </S.NoOrders> */}

      <Nav />
    </S.Wrapper>
  )
}
