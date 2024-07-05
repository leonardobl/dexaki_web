import { Button } from "../../components/Button/Button";
import * as S from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { useBag } from "./useBag";
import { BagItem } from "../../components/BagItem";

export const Bag = () => {
  const { navigate, bagProducts } = useBag();

  return (
    <S.Wrapper>
      <header>
        <div onClick={() => navigate(-1)}>
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

        {bagProducts?.length > 0 &&
          bagProducts.map((i) => <BagItem key={i.id} product={i} />)}

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
