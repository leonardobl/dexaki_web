import { useState } from "react"


export const useAdress = () => {
  const [showModalAdress, setShowModalAdress] = useState(false)

  function modalAdress() {
    console.log('arrived here')
    setShowModalAdress(true)
  }

  return {
    modalAdress,
    showModalAdress,
    setShowModalAdress
  }
}

