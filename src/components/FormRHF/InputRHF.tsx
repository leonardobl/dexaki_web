import { Controller, useFormContext, RegisterOptions } from "react-hook-form"
import { IInputProps, Input } from "../Form/Input"


export interface IInputRHF extends Omit<IInputProps, 'name'> {
  type?: string
  name: string
  rules?: RegisterOptions
  mask?: any
}

export const InputRHF = ({
  error,
  name,
  rules,
  mask,
  ...res
}: IInputRHF) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={res.defaultValue}
      render={({ field: { value, onChange } }) => (
        <Input
          {...res}
          value={value}
          error={error}
          onChange={(e) => {
            const newValue = e.target.value;
            const maskedValue = mask ? mask(newValue) : newValue;
            onChange(maskedValue);
          }}
        />
      )}
    />
  )
}

