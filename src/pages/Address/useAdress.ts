import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FormProvider, useForm, } from 'react-hook-form'
import { IDataAdressProps, formSchema } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { IDataDeliveryUser } from "../../model/Product"
import { IDataUserProps, formSchemaUser } from "../Bag/schema"

export const useAdress = () => {
  const [dataDelivery, setDataDelivery] = useLocalStorage<IDataDeliveryUser>({ storageKey: "@delivery" })
  const [showModalAdress, setShowModalAdress] = useState(false)
  const [showModalConfirm, setShowModalConfirm] = useState(false)
  const [showModalUser, setShowModalUser] = useState(false)

  const navigate = useNavigate()
  const { mode } = useParams()

  // const currentAdress = dataDelivery.adress ? dataDelivery.adress.find(adress => adress.currentAdress) : []

  const initialValueAdress = {
    numero: '',
    rua: '',
    complemento: ''
  }

  const initialValueUser = {
    phone: dataDelivery.phone,
    name: dataDelivery.name
  }

  const methodsAdress = useForm<IDataAdressProps>({
    mode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: initialValueAdress,
    resolver: zodResolver(formSchema),
  })

  const { formState: { errors: adressErros } } = methodsAdress;

  const methodsUser = useForm<IDataUserProps>({
    mode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: initialValueUser,
    resolver: zodResolver(formSchemaUser),
  })

  const { formState: { errors: userErros } } = methodsUser;

  function onSendSubmitEditUser(data: IDataUserProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      name: data.name,
      phone: data.phone
    }

    setDataDelivery(result)
    setShowModalUser(false)
  }

  function onSendSubmitSaveAdress(data: IDataAdressProps) {
    const result: IDataDeliveryUser = {
      ...dataDelivery,
      adress: {
        rua: data.rua,
        numero: Number(data.numero),
        complemento: data.complemento,
        currentAdress: true
      }
    }

    setDataDelivery(result)
    navigate('/adress')
  }

  function deleteAdress() {
    const result = {
      ...dataDelivery,
      adress: undefined
    }
    setDataDelivery(result)
    setShowModalAdress(false)
  }

  function finalizar() {
    if (dataDelivery.adress) {
      setShowModalConfirm(true)
    }
  }

  function editUser() {
    setShowModalUser(true)
  }

  function formAdress(mode: string) {
    navigate(`/editAdress/${mode}`)
  }

  return {
    onSendSubmitSaveAdress,
    dataDelivery,
    userErros,
    adressErros,
    FormProvider,
    methodsAdress,
    navigate,
    showModalAdress,
    setShowModalAdress,
    editUser,
    showModalUser,
    setShowModalUser,
    methodsUser,
    onSendSubmitEditUser,
    formAdress,
    mode,
    showModalConfirm,
    setShowModalConfirm,
    finalizar,
    deleteAdress
  }
}

