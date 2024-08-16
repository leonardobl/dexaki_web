import React from "react";
import * as S from "./styles";
import { InputCustomProps } from "../../../types/inputs";

export const InputV2 = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (props: InputCustomProps, ref) => {
    return (
      <S.Container>
        <S.MyInput
          ref={ref}
          onWheel={(event) => event.currentTarget.blur()}
          {...props}
        />
        {props?.error && <S.Error>{props.error}</S.Error>}
      </S.Container>
    );
  }
);
