import { FaTrash } from "react-icons/fa";
import * as S from "./styles";

export const InputAddItem = () => {
  return (
    <S.Container>
      <S.Input />
      <FaTrash color="#FF6B00" size={12} />
    </S.Container>
  );
};
