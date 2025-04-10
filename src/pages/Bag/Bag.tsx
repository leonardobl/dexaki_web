import { Button } from "../../components/Button/Button";
import * as S from "./styles";
import { FaCartPlus } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { TbTrashXFilled } from "react-icons/tb";
import { useBag } from "./useBag";
import { maskMoney, maskPhone } from "../../Util/masks.ts";
import { ModalBottom } from "../../components/ModalBottom";
import { InputRHF } from "../../components/FormRHF/InputRHF";
import { GiStorkDelivery } from "react-icons/gi";
import { IProduct } from "../../model/Product.ts";
import { BagItem } from "../../components/BagItem/index.tsx";

export const Bag = () => {
  const {
    navigate,
    dataDelivery,
    CleanAll,
    frete,
    setShowModal,
    showModal,
    methods,
    FormProvider,
    onSendSubmit,
    BtnContinuar,
    errors,
    addQuantity,
    lessQuantity,
  } = useBag();

  return (
    <S.Wrapper>
      <header>
        <div onClick={() => navigate("/")}>
          <MdOutlineKeyboardArrowLeft size={22} />
          <h3>Sacola</h3>
        </div>

        <h4 onClick={CleanAll}>
          <TbTrashXFilled color="#FF6B00" size={19} />
          Limpar
        </h4>
      </header>
      <S.Body>
        {dataDelivery?.products?.length > 0 && <h3>Itens adicionados</h3>}

        {dataDelivery?.products?.length > 0 ? (
          dataDelivery?.products?.map((i: IProduct) => (
            <BagItem
              key={i?._id}
              product={i}
              addQuantity={() => addQuantity(i)}
              lessQuantity={() => lessQuantity(i)}
            />
          ))
        ) : (
          <S.NoItems>
            <p>Não há nenhum item na sua sacola</p>
            <MdProductionQuantityLimits size={17} color="#999" />
          </S.NoItems>
        )}

        <S.AddItem onClick={() => navigate("/")}>
          <p>Adicionar mais pedidos</p>
          <FaCartPlus size={16} color="#FF6B00" />
        </S.AddItem>

        <S.Resume>
          <h3>Resumo de valores</h3>

          <div className="description">
            <div>
              <p>Subtotal</p>
              {/* <span>{maskMoney(total)}</span> */}
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
              {/* <span className="total">{maskMoney(total + frete)}</span> */}
            </div>
          </div>
        </S.Resume>
      </S.Body>

      <S.ContentFooter>
        <div>
          <span>Total com a entrega</span>
          <h3>
            {/* {maskMoney(total + frete)}/{" "} */}
            <small> {dataDelivery?.products?.length} item</small>
          </h3>
        </div>

        <Button
          disabled={!(dataDelivery?.products?.length > 0)}
          onClick={() => BtnContinuar()}
        >
          Continuar
        </Button>
      </S.ContentFooter>

      <ModalBottom isOpen={showModal} onClose={() => setShowModal(false)}>
        <S.ModalDescription>
          <h3>
            Falta pouco <GiStorkDelivery size={25} />
          </h3>
          <p>Coloque abaixo seu nome e seu número!</p>
        </S.ModalDescription>

        <S.ContentModalInput>
          <FormProvider {...methods}>
            <InputRHF
              name="phone"
              placeholder="(XX) XXXXX - XXXX"
              maxLength={15}
              mask={maskPhone}
              error={errors?.phone?.message}
            />
            <InputRHF
              name="name"
              placeholder="Digite seu Nome e sobrenome"
              error={errors?.name?.message}
            />

            <Button onClick={() => methods?.handleSubmit(onSendSubmit)()}>
              Avançar
            </Button>
          </FormProvider>
        </S.ContentModalInput>
      </ModalBottom>
    </S.Wrapper>
  );
};
