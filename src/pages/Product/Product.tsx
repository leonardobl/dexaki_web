import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { useProduct } from "./useProduct";
import { maskMoney } from "../../util/masks";
import { FaCartPlus } from "react-icons/fa";

export const Product = () => {
  const {
    addToCart,
    addQuantity,
    lessQuantity,
    goBack,
    navigate,
    quantity,
    setShowModal,
    showModal,
    total,
    product,
  } = useProduct();

  return (
    <S.WrapperProduct>
      <div className="header-product-image">
        <img src={product?.img} alt="imagem produto" />

        <button type="button" onClick={goBack}>
          <IoIosArrowBack size={24} color="#FF6B00" />
        </button>
      </div>

      <div className="description-product">
        <h4>{product?.name}</h4>
        <span className="price">{maskMoney(product?.price)}</span>
        <p className="description">{product?.description}</p>
      </div>

      <div className="content-textarea">
        <p>Observações</p>
        <textarea
          name=""
          id=""
          placeholder="Ex: Tiraa cebola, ovo, etc.."
        ></textarea>
      </div>

      <div className="footer-price">
        <div className="quantity">
          <button onClick={lessQuantity}> - </button>
          <span> {quantity} </span>
          <button type="button" onClick={addQuantity}>
            +
          </button>
        </div>
        <button className="button-add" onClick={() => addToCart()}>
          Adicionar R$ {total}
        </button>
      </div>

      <Modal
        title="Confirme Seus Dados"
        isOpen={showModal}
        onClose={() => setShowModal(!showModal)}
      >
        <div></div>
        <S.ContentButton>
          <Button variant="outlined" onClick={() => navigate("/bag")}>
            Ir Para carinho

          </Button>
          <Button onClick={() => navigate("/")}>Continuar Comprando <FaCartPlus size={18} /></Button>
        </S.ContentButton>
      </Modal>
    </S.WrapperProduct>
  );
};
