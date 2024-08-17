import { useNavigate, useParams } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser } from "../../model/Product";
import { IDataUserProps } from "../Bag/schema";
import { IDataAdressProps, formSchema } from "../Address/schema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { ISelectOption } from "../../types/selectOptions";

import { IEstado, IUFS } from "../../types/ibge";
import { maskCep } from "../../Util/masks";
import { useAppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import { Ibge } from "../../services/Ibge";
import { ViaCep } from "../../services/ViaCep";

export const useNewAdress = () => {
  const { setIsLoad } = useAppContext();
  const { mode } = useParams();
  const navigate = useNavigate();
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });
  const [cidadesOptions, setCidadesOptions] = useState<
    ISelectOption<IEstado>[]
  >([] as ISelectOption<IEstado>[]);

  const [estadosOptions, setEstadosOptions] = useState<ISelectOption<IUFS>[]>(
    [] as ISelectOption<IUFS>[]
  );

  const initialValueAdress = {
    numero: dataDelivery?.adress?.numero?.toString() ?? "",
    rua: dataDelivery?.adress?.rua ?? "",
    complemento: dataDelivery?.adress?.complemento ?? "",
  };

  const {
    control,
    handleSubmit,
    register,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IDataAdressProps>({
    mode: "onSubmit",
    shouldFocusError: false,
    defaultValues: initialValueAdress,
    resolver: zodResolver(formSchema),
  });

  function onSendSubmitEditUser(data: IDataUserProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      name: data.name,
      phone: data.phone,
    };

    setDataDelivery(result);
  }

  function onSendSubmitSaveAdress(data: IDataAdressProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      delivery: undefined,
      typeOfpayment: undefined,
      adress: {
        rua: data.rua,
        numero: Number(data.numero),
        complemento: data?.complemento || "",
        currentAdress: true,
      },
    };

    setDataDelivery(result);
    navigate(-1);
  }

  const getCidades = useCallback(() => {
    Ibge.UFs().then(({ data }) => {
      const options = data.map((i) => ({
        value: i.sigla,
        label: i.sigla,
        element: i,
      }));
      setEstadosOptions(options);
    });
  }, []);

  useEffect(() => {
    getCidades();
  }, [getCidades]);

  function handleBlurCep() {
    if (watch("cep").length === 9) {
      setIsLoad(true);
      const cep = getValues("cep");

      ViaCep.get(cep)
        .then(({ data }) => {
          setValue("rua", data.logradouro);
          setValue("bairro", data.bairro);
          setValue("estado", data.uf);
          setValue("cidade", data.localidade);
        })
        .catch((erro) => toast.error(erro))
        .finally(() => {
          setIsLoad(false);
        });
    }
  }

  useEffect(() => {
    if (watch("estado")) {
      Ibge.CidadesPorEstado({ sigla: watch("estado") }).then(({ data }) => {
        const options = data.map((i) => ({
          value: i.nome,
          label: i.nome,
          element: i,
        }));
        setCidadesOptions(options);
      });
    }
  }, [watch("estado")]);

  useEffect(() => {
    if (watch("cep")) {
      setValue("cep", maskCep(watch("cep")));
    }
  }, [watch("cep")]);

  return {
    mode,
    navigate,
    dataDelivery,
    onSendSubmitEditUser,
    onSendSubmitSaveAdress,
    control,
    handleSubmit,
    register,
    errors,
    estadosOptions,
    Controller,
    handleBlurCep,
    cidadesOptions,
  };
};
