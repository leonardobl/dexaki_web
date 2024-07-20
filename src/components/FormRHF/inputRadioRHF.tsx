import { Controller, useFormContext, RegisterOptions } from "react-hook-form"
import { IRadioProps, Radio } from "../Form/Radio"


export interface IInputRadioRHF extends Omit<IRadioProps, 'name'> {
  name: string
  rules?: RegisterOptions
}

export const InputRadioRHF = ({
  name,
  rules,
  ...res
}: IInputRadioRHF) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={res.defaultValue}
      render={({ field: { value } }) => (
        <Radio
          {...res}
          value={value}
        />
      )}
    />
  )
}

