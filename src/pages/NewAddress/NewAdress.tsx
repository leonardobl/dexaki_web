import * as S from "./styles";
import { IconArrowLeft } from "../../assets/icons/IconArrowLeft";
import { Button } from "../../components/Button/Button";
import { IoLocationOutline } from "react-icons/io5";
import { SimpleSelect } from "../../components/Selects/SimpleSelect";
import { useNewAdress } from "./useNewAdress";
import { InputV2 } from "../../components/Form/InputV2";

export const NewAdress = () => {
  const {
    mode,
    navigate,
    dataDelivery,
    onSendSubmitSaveAdress,
    estadosOptions,
    control,
    errors,
    handleSubmit,
    register,
    Controller,
    handleBlurCep,
    cidadesOptions,
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
        <form onSubmit={handleSubmit(onSendSubmitSaveAdress)}>
          <S.ContentFormAdress>
            <div>
              <InputV2
                {...register("cep")}
                required
                name="cep"
                onBlur={handleBlurCep}
                maxLength={9}
                placeholder="Cep*"
                error={errors?.cep?.message}
              />
            </div>

            <div>
              <InputV2
                {...register("rua")}
                required
                name="rua"
                placeholder="Rua*"
                error={errors?.rua?.message}
              />
            </div>
            <div>
              <InputV2
                {...register("numero")}
                required
                name="numero"
                placeholder="Número*"
                error={errors?.numero?.message}
              />
            </div>

            <div>
              <InputV2
                {...register("bairro")}
                required
                name="bairro"
                placeholder="Bairro*"
                error={errors?.bairro?.message}
              />
            </div>

            <div>
              <InputV2
                {...register("complemento")}
                name="complemento"
                placeholder="Complemento"
                error={errors?.complemento?.message}
              />
            </div>

            <div>
              <Controller
                control={control}
                name="estado"
                render={({ field: { onChange, value } }) => (
                  <SimpleSelect
                    placeholder={"Estado*"}
                    options={estadosOptions}
                    value={
                      estadosOptions.find((e) => e.value === value) || null
                    }
                    onChange={(e) => onChange(e?.value)}
                  />
                )}
              />
            </div>

            <div>
              <Controller
                control={control}
                name="cidade"
                render={({ field: { onChange, value } }) => (
                  <SimpleSelect
                    options={cidadesOptions}
                    placeholder={"Cidade*"}
                    value={
                      cidadesOptions.find((i) => i.value === value) || null
                    }
                    onChange={(e) => onChange(e?.value)}
                  />
                )}
              />
            </div>

            <div>
              <InputV2
                {...register("referencia")}
                name="referencia"
                placeholder="Ponto de Referência (opcional)"
                error={errors?.referencia?.message}
              />
            </div>

            <div>
              <Button>Confirmar</Button>
            </div>
            <div>
              <Button type="button" onClick={() => navigate(-1)}>
                Voltar
              </Button>
            </div>
          </S.ContentFormAdress>
        </form>
      </S.Body>
    </S.Wrapper>
  );
};
