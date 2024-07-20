import * as S from './styles'
import { RiFileCopyLine } from "react-icons/ri";

export const InputCopy = () => {
  return (
    <S.Wrapper>
      <input type="text" />
      <button>
        <RiFileCopyLine size={22} />
      </button>
    </S.Wrapper>
  )
}
