import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import * as S from "./styles";
import { FaTrash } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
// import { useState } from "react";

export const Bag = () => {
  // const [itens, setItens] = useState();

  function add(id: number) {
    console.log(id);

    // const selectedItem = data.find(i => i.id === id)
  }

  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <header>
        <div onClick={() => navigate("/")}>
          <MdOutlineKeyboardArrowLeft size={22} />
          <h3>Sacola</h3>
        </div>

        <h4>
          <TbTrashXFilled color="#FF6B00" size={19} />
          Limpar
        </h4>
      </header>

      <S.Body>
        <h3>Itens adicionados</h3>
        <S.SelectedItem>
          <div className="content-left">
            <div className="img"></div>
            <div className="description">
              <p>Hamburguer</p>
              <span>Mussarela, Ovos, baicon...</span>
              <strong>R$: 40,00</strong>

              <div className="content-itens">
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
            <FaTrash color="#FF6B00" size={12} />

            <span>1</span>

            <span onClick={() => add(1)}> + </span>
          </div>
        </S.SelectedItem>

        <S.SelectedItem>
          <div className="content-left">
            <div className="img"></div>
            <div className="description">
              <p>Pizza Quatro Queijos</p>
              <span>Mussarela, Ovos, baicon...</span>
              <strong>R$: 40,00</strong>

              <div className="content-itens">
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
            <FaTrash color="#FF6B00" size={12} />

            <span>1</span>

            <span> + </span>
          </div>
        </S.SelectedItem>

        <S.AddItem onClick={() => navigate("/")}>
          <p>Adicionar mais pedidos</p>
          <FaCartPlus size={16} color="#FF6B00" />
        </S.AddItem>

        <S.Resume>
          <h3>Resumo de valores</h3>

          <div className="description">
            <div>
              <p>Subtotal</p>
              <span>R$ 55,80</span>
            </div>

            <div>
              <p>Taxa de Entrega</p>
              <span>R$ 5,80</span>
            </div>

            <div>
              <p>Cumpons</p>
              <span>R$ 0,00</span>
            </div>

            <div>
              <strong>Total</strong>
              <span className="total">R$ 65,80</span>
            </div>
          </div>
        </S.Resume>
      </S.Body>

      <S.ContentFooter>
        <div>
          <span>Total com a entrega</span>
          <h3>
            R$ 42,88/ <small> 1 item</small>
          </h3>
        </div>

        <Button onClick={() => navigate("/typeDelivery")}>Continuar</Button>
      </S.ContentFooter>
    </S.Wrapper>
  );
};
