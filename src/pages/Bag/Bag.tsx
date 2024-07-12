import { Button } from "../../components/Button/Button";
import * as S from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { useBag } from "./useBag";
import { BagItem } from "../../components/BagItem";
import { maskMoney } from "../../Util/masks";
import { IProductsCart } from "../../model/Product";

export const Bag = () => {
  const { navigate, dataDelivery, total, CleanAll, frete, addQuantity, lessQuantity } = useBag();

  return (
    <S.Wrapper>
      <header>
        <div onClick={() => navigate(-1)}>
          <MdOutlineKeyboardArrowLeft size={22} />
          <h3>Sacola</h3>
        </div>

        <h4 onClick={CleanAll}>
          <TbTrashXFilled color="#FF6B00" size={19} />
          Limpar
        </h4>
      </header>

      <S.Body>
        <h3>Itens adicionados</h3>

        {dataDelivery.products?.length > 0 &&
          dataDelivery.products.map((i: IProductsCart) => <BagItem
            key={i.id}
            product={i}
            addQuantity={() => addQuantity(i)}
            lessQuantity={() => lessQuantity(i)}
          />)}

        <S.AddItem onClick={() => navigate("/")}>
          <p>Adicionar mais pedidos</p>
          <FaCartPlus size={16} color="#FF6B00" />
        </S.AddItem>

        <S.Resume>
          <h3>Resumo de valores</h3>

          <div className="description">
            <div>
              <p>Subtotal</p>
              <span>{maskMoney(total)}</span>
            </div>

            <div>
              <p>Taxa de Entrega</p>
              <span>{maskMoney(frete)}</span>
            </div>

            <div>
              <p>Cumpons</p>
              <span>R$ 0,00</span>
            </div>

            <div>
              <strong>Total</strong>
              <span className="total">{maskMoney(total + frete)}</span>
            </div>
          </div>
        </S.Resume>
      </S.Body>

      <S.ContentFooter>
        <div>
          <span>Total com a entrega</span>
          <h3>
            {maskMoney(total + frete)}/ <small> {dataDelivery.products.length} item</small>
          </h3>
        </div>

        <Button onClick={() => navigate("/typeDelivery")}>Continuar</Button>
      </S.ContentFooter>
    </S.Wrapper>
  );
};
