import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "../../components/Button/Button";
import { useProduct } from "./useProduct";
import { maskMoney } from "../../Util/masks.ts";
import { FaCartPlus } from "react-icons/fa";
import { ModalBottom } from "../../components/ModalBottom/index.tsx";
import { BiMessageDetail } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";

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
    product,
    comment,
    setComment,
  } = useProduct();

  return (
    <S.WrapperProduct>
      <div className="header-product-image">
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${
            product?.image?.filename
          }`}
          alt="imagem produto"
        />

        <button type="button" onClick={goBack}>
          <IoIosArrowBack size={24} color="#FF6B00" />
        </button>
      </div>

      <div className="description-product">
        <h4>{product?.name}</h4>
        <p className="description">{product?.description}</p>

        <S.Promo>
          <p>Item promocional</p>
        </S.Promo>

        <p className="content-price">
          <span>{maskMoney(product?.price + 10)}</span>
          <span className="price">{maskMoney(product?.price)}</span>
        </p>
      </div>

      <div className="content-textarea">
        <p>
          Observações
          <BiMessageDetail size={18} />
        </p>
        <textarea
          maxLength={140}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name=""
          id=""
          placeholder="Ex: Tiraa cebola, ovo, etc.."
        ></textarea>
        <div className="number-caracter">
          <p>0/140</p>
        </div>
      </div>

      <div className="footer-price">
        <div className="quantity">
          <button onClick={lessQuantity}> - </button>
          <span> {quantity} </span>
          <button type="button" onClick={addQuantity}>
            +
          </button>
        </div>
        <Button onClick={() => addToCart()} disabled={quantity === 0}>
          <p>
            <BsCartPlusFill size={18} />
            Adicionar
          </p>
          {maskMoney(product?.price * quantity)}
        </Button>
      </div>

      <ModalBottom isOpen={showModal} onClose={() => setShowModal(!showModal)}>
        <S.WrapperModal>
          <h3>Você deseja ir para</h3>
          <S.ContentButton>
            <Button data-variant-outline onClick={() => navigate("/bag")}>
              Ir Para carinho
            </Button>
            <Button onClick={() => navigate("/")}>
              Continuar Comprando <FaCartPlus size={18} />
            </Button>
          </S.ContentButton>
        </S.WrapperModal>
      </ModalBottom>
    </S.WrapperProduct>
  );
};
