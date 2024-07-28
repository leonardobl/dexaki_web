import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "../../components/Button/Button";
import { useProduct } from "./useProduct";
import { maskMoney } from "../../Util/masks.ts";
import { FaCartPlus } from "react-icons/fa";
import { ModalBottom } from "../../components/ModalBottom/index.tsx";

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
        <img
          src={`${import.meta.env.VITE_API_URL}/uploads/${product?.imagePath}`}
          alt="imagem produto"
        />

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

      <ModalBottom isOpen={showModal} onClose={() => setShowModal(!showModal)}>
        <S.WrapperModal>
          <h3>Você deseja ir para</h3>
          <S.ContentButton>
            <Button variant="outlined" onClick={() => navigate("/bag")}>
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
