import { FaTrash } from "react-icons/fa";
import * as S from "./styles";
import { useInputAddItem } from "./useInputAddItem";
import { ComponentProps, useEffect } from "react";
interface IInputAddItemProps extends ComponentProps<"div"> {
  productDefault: number;
  onRemove: () => void;
}

export const InputAddItem = ({
  productDefault,
  onRemove,
  ...rest
}: IInputAddItemProps) => {
  const { value, setValue } = useInputAddItem();

  useEffect(() => {
    setValue(productDefault);
  }, []);

  return (
    <S.Container {...rest}>
      <FaTrash color="#FF6B00" size={12} onClick={onRemove} />

      <span>{value}</span>

      <button
        onClick={() =>
          setValue((prev) => {
            if (prev >= 99) return 99;

            return prev + 1;
          })
        }
      >
        {" "}
        +{" "}
      </button>
    </S.Container>
  );
};
