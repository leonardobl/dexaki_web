import { toast } from 'react-toastify';
import * as S from './styles'
import { RiFileCopyLine } from "react-icons/ri";

interface ICopyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputCopy: React.FC<ICopyInputProps> = ({ value, onChange, placeholder, ...rest }) => {
  function copyClick() {
    toast.success('Código copiado com sucesso!', {
      position: 'top-center',
      theme: 'colored',
      autoClose: 3000,
    })
  }

  return (
    <S.Wrapper>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <button onClick={copyClick}>
        <RiFileCopyLine size={22} />
      </button>
    </S.Wrapper>
  )
}
