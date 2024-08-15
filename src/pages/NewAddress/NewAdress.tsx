import * as S from "./styles";
import { IconArrowLeft } from "../../assets/icons/IconArrowLeft";
import { InputRHF } from "../../components/FormRHF/InputRHF";
import { Button } from "../../components/Button/Button";
import { IoLocationOutline } from "react-icons/io5";
import { SimpleSelect } from "../../components/Selects/SimpleSelect";
import { useNewAdress } from "./useNewAdress";
import { FormProvider } from "react-hook-form";

export const NewAdress = () => {
  const {
    mode,
    navigate,
    dataDelivery,
    methodsAdress,
    onSendSubmitSaveAdress,
    adressErros,
    estadosOptions,
  } = useNewAdress();
  return (
    <S.Wrapper>
      <S.Header onClick={() => navigate("/myprofile/adress")}>
        <IconArrowLeft />
        {mode === "edit" ? <h1>Editar Endereço</h1> : <h1>Novo Endereço</h1>}
      </S.Header>
      <S.Body>
        {mode === "edit" && (
          <S.DescriptionAdressEdit>
            <div className="description">
              <IoLocationOutline size={30} />
              <div>
                <strong>{dataDelivery?.adress?.rua}</strong>
                <p>{dataDelivery?.adress?.numero}</p>
                <p>{dataDelivery?.adress?.complemento}</p>
              </div>
            </div>
          </S.DescriptionAdressEdit>
        )}
        <FormProvider {...methodsAdress}>
          <S.ContentFormAdress>
            <div>
              <InputRHF
                name="cep"
                placeholder="Cep*"
                error={adressErros?.numero?.message}
              />
            </div>

            <div>
              <InputRHF
                name="rua"
                placeholder="Rua*"
                error={adressErros?.rua?.message}
              />
            </div>
            <div>
              <InputRHF
                name="numero"
                required
                placeholder="Número*"
                error={adressErros?.numero?.message}
              />
            </div>

            <div>
              <InputRHF
                name="barro"
                required
                placeholder="Bairro*"
                error={adressErros?.complemento?.message}
              />
            </div>

            <div>
              <InputRHF
                name="complemento"
                placeholder="Complemento"
                error={adressErros?.complemento?.message}
              />
            </div>

            <div>
              <SimpleSelect placeholder={"Estado*"} options={estadosOptions} />
            </div>

            <div>
              <SimpleSelect placeholder={"Cidade*"} />
            </div>

            <div>
              <InputRHF
                name="referencia"
                placeholder="Ponto de Referência(opcional)"
                error={adressErros?.complemento?.message}
              />
            </div>

            <div>
              <Button
                onClick={() =>
                  methodsAdress.handleSubmit(onSendSubmitSaveAdress)()
                }
              >
                Confirmar
              </Button>
            </div>
            <div>
              <Button onClick={() => navigate}>Voltar</Button>
            </div>
          </S.ContentFormAdress>
        </FormProvider>
      </S.Body>
    </S.Wrapper>
  );
};
