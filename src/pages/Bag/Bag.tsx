import { Button } from '../../components/Button/Button';
import * as S from './styles'
import { FaTrash } from "react-icons/fa";

export const Bag = () => {
  return (
    <S.Wrapper>
      <header>

        <h3>Sacola</h3>

      </header>


      <S.Body>
        <h3>Itens adicionados</h3>
        <S.SelectedItem>
          <div className='content-left'>
            <div className="img"></div>
            <div className="description">
              <p>Quatro Queijos</p>
              <span>Mussarela, Ovos, baicon...</span>
              <strong>R$: 40,00</strong>

              <div className='content-itens'>
                <div>
                  <p>1</p>
                  <span> Refrigerante</span>
                </div>

                <div>
                  <p>1</p>
                  <span> Batata Fritas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="option">
            <FaTrash color='#FF6B00' size={12} />

            <span>1</span>

            <span> + </span>
          </div>
        </S.SelectedItem>

        <S.SelectedItem>
          <div className='content-left'>
            <div className="img"></div>
            <div className="description">
              <p>Quatro Queijos</p>
              <span>Mussarela, Ovos, baicon...</span>
              <strong>R$: 40,00</strong>

              <div className='content-itens'>
                <div>
                  <p>1</p>
                  <span> Refrigerante</span>
                </div>

                <div>
                  <p>1</p>
                  <span> Batata Fritas</span>
                </div>
              </div>
            </div>
          </div>
          <div className="option">
            <FaTrash color='#FF6B00' size={12} />

            <span>1</span>

            <span> + </span>
          </div>
        </S.SelectedItem>

        <S.Resume>
          <h3>Resumo de valores</h3>

          <div className='description'>
            <div>
              <p>Subtotal</p>
              <span>R$ 55,80</span>
            </div>

            <div>
              <p>Taxa de Entrega</p>
              <span>R$ 5,80</span>
            </div>

            <div>
              <strong>Total</strong>
              <span>R$ 65,80</span>
            </div>
          </div>
        </S.Resume>
      </S.Body>

      <S.ContentFooter>
        <div>
          <span>Total com a entrega</span>
          <h3>R$ 42,88/ <small> 1 item</small></h3>
        </div>

        <Button>Continuar</Button>
      </S.ContentFooter>
    </S.Wrapper>
  )
}
