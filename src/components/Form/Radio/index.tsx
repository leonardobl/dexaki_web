import * as S from './styles'

export interface IRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string
  description?: string
  label: string
  id: string
  icon?: React.ReactNode
}

export const Radio = ({ title, label, description, id, icon, ...rest }: IRadioProps) => {
  return (
    <S.Wrapper>
      <input type="radio" name="" id={id} {...rest} />
      <label htmlFor={id}>

        <strong>{icon}{title}</strong>
        {label}
        <small>{description}</small>
      </label>
    </S.Wrapper>
  )
}

