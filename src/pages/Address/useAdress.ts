import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormProvider, useForm, } from 'react-hook-form'
import { IDataAdressProps, formSchema } from "./types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { IDataDeliveryUser } from "../../model/Product"



export const useAdress = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery" })
  const [showModalAdress, setShowModalAdress] = useState(false)

  const navigate = useNavigate()

  const initialValue = {
    numero: '345',
    rua: 'Rua. Edinaelza S.Correia',
    complemento: 'Próximo ao Atacadão'
  }

  const methods = useForm<IDataAdressProps>({
    mode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: initialValue,
    resolver: zodResolver(formSchema),
  })

  const { formState: { errors } } = methods;


  function onSendSubmit(data: IDataAdressProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      adress: {
        rua: data.rua,
        numero: Number(data.numero),
        complemento: data.complemento
      }
    }

    setDataDelivery(result)
    navigate('/adress')
  }

  function modalAdress() {
    setShowModalAdress(true)
  }

  return {
    errors,
    FormProvider,
    methods,
    onSendSubmit,
    navigate,
    modalAdress,
    showModalAdress,
    setShowModalAdress
  }
}

