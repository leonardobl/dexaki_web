import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { IDataDeliveryUser, IProductsCart } from "../../model/Product";
import { useState } from "react";
import { FormProvider, useForm, } from 'react-hook-form'
import { IDataUserProps, formSchemaUser } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const userDelivery: IDataDeliveryUser = {
  name: '',
  email: '',
  phone: '',
  adress: undefined,
  typeOfpayment: undefined,
  delivery: false,
  products: []
}

export const useBag = () => {
  const [showModal, setShowModal] = useState(false)
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery", initialValue: userDelivery })

  const navigate = useNavigate();

  const initialValue = {
    phone: '',
    name: ''
  }

  const methods = useForm<IDataUserProps>({
    mode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: initialValue,
    resolver: zodResolver(formSchemaUser),
  })

  const { formState: { errors } } = methods;


  function onSendSubmit(data: IDataUserProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      name: data.name,
      phone: data.phone
    }

    setDataDelivery(result)
    navigate('/adress')
  }

  const total = dataDelivery.products
    .map((i) => i.price * i.quantity)
    .reduce((acc, p) => acc + p, 0);

  const frete = 0.0;

  function addQuantity(product: IProductsCart) {
    const update: IProductsCart = {
      ...product,
      quantity: product.quantity + 1,
    };

    const updatedProducts = dataDelivery.products.map((i: IProductsCart) =>
      i.id === update.id ? update : i
    );

    const result = {
      ...dataDelivery,
      products: updatedProducts
    };

    setDataDelivery(result);
  }

  function lessQuantity(product: IProductsCart) {
    if (product.quantity <= 1) {
      const updateProduct = dataDelivery.products.filter(i => i.id !== product.id)
      setDataDelivery({
        ...dataDelivery,
        products: updateProduct
      })
    } else {
      const update: IProductsCart = {
        ...product,
        quantity: product.quantity - 1
      };

      const updatedProducts = dataDelivery.products.map((i: IProductsCart) =>
        i.id === update.id ? update : i
      );

      const result = {
        ...dataDelivery,
        products: updatedProducts
      };

      setDataDelivery(result);
    }

  }

  function CleanAll() {
    setDataDelivery({
      ...dataDelivery,
      products: []
    })
  }


  function BtnContinuar() {
    if (dataDelivery.name && dataDelivery.phone) {
      navigate('/adress')
    } else {
      setShowModal(true)
    }
  }


  return {
    navigate,
    addQuantity,
    lessQuantity,
    BtnContinuar,
    CleanAll,
    dataDelivery,
    total,
    frete,
    showModal,
    setShowModal,
    methods,
    FormProvider,
    onSendSubmit,
    errors
  };
};
