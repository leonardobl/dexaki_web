import { useNavigate } from "react-router-dom";
import { IDataDeliveryUser, IProduct } from "../../model/Product";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IDataUserProps, formSchemaUser } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const useBag = () => {
  const [showModal, setShowModal] = useState(false);

  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({
    storageKey: "@delivery",
  });

  const navigate = useNavigate();

  const initialValue = {
    phone: "",
    name: "",
  };

  // const total = useMemo(() => {
  //   return dataDelivery.products
  //     .map((i) => i.price * i.quantity)
  //     .reduce((acc, p) => acc + p, 0);
  // }, [dataDelivery.products])

  const frete = 0.0;

  const methods = useForm<IDataUserProps>({
    mode: "onSubmit",
    shouldFocusError: false,
    defaultValues: initialValue,
    resolver: zodResolver(formSchemaUser),
  });

  const {
    formState: { errors },
  } = methods;

  function onSendSubmit(data: IDataUserProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      name: data.name,
      phone: data.phone,
    };

    setDataDelivery(result);
    navigate("/myprofile/adress");
  }

  function addQuantity(product: IProduct) {
    const update: IProduct = {
      ...product,
      quantity: product.quantity + 1,
    };

    const updatedProducts = dataDelivery.products.map((i: IProduct) =>
      i._id === update._id ? update : i
    );

    const result = {
      ...dataDelivery,
      products: updatedProducts,
    };

    setDataDelivery(result);
  }

  function lessQuantity(product: IProduct) {
    if (product.quantity <= 1) {
      const updateProduct = dataDelivery.products.filter(
        (i) => i._id !== product._id
      );
      setDataDelivery({
        ...dataDelivery,
        products: updateProduct,
      });
    } else {
      const update: IProduct = {
        ...product,
        quantity: product.quantity - 1,
      };

      const updatedProducts = dataDelivery.products.map((i: IProduct) =>
        i._id === update._id ? update : i
      );

      const result = {
        ...dataDelivery,
        products: updatedProducts,
      };

      setDataDelivery(result);
    }
  }

  function CleanAll() {
    setDataDelivery({
      ...dataDelivery,
      products: [],
    });
  }

  function BtnContinuar() {
    if (dataDelivery.name && dataDelivery.phone) {
      navigate("/myprofile/adress");
    } else {
      setShowModal(true);
    }
  }

  return {
    navigate,
    BtnContinuar,
    CleanAll,
    dataDelivery,
    frete,
    showModal,
    setShowModal,
    methods,
    FormProvider,
    onSendSubmit,
    errors,
    addQuantity,
    lessQuantity,
  };
};
