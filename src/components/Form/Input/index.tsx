import * as S from './styles'

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = ({ placeholder, value, error, onChange, ...props }) => {
  return (
    <S.WrapperInput>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      <span>{error}</span>
    </S.WrapperInput>
  );
};