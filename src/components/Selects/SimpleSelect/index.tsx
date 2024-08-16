import * as S from "./styles";

import Select, {
  ClearIndicatorProps,
  GroupBase,
  Props,
  components,
} from "react-select";

import { IoCloseOutline } from "react-icons/io5";
interface CustomSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Props<Option, IsMulti, Group> {
  label?: string;
  required?: boolean;
  error?: string;
}

export const SimpleSelect = function ReactSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: CustomSelectProps<Option, IsMulti, Group>) {
  const ClearIndicator = (
    props: ClearIndicatorProps<Option, IsMulti, Group>
  ) => {
    return (
      <components.ClearIndicator {...props}>
        <IoCloseOutline
          size={20}
          style={{
            cursor: "pointer",
            position: "relative",
            right: "-18px",
          }}
        />
      </components.ClearIndicator>
    );
  };

  // const DropdownIndicator = (
  //   props: DropdownIndicatorProps<Option, IsMulti, Group>
  // ) => {
  //   return (
  //     components.DropdownIndicator && (
  //       <components.DropdownIndicator {...props}>
  //         <img
  //           src="/assets/svg/icon-dropdown-select.svg"
  //           alt="icon arrow down"
  //         />
  //       </components.DropdownIndicator>
  //     )
  //   );
  // };

  const IndicatorSeparator = () => {
    return null;
  };

  return (
    <S.Container>
      <Select
        {...props}
        required={false}
        components={{
          ClearIndicator,
          IndicatorSeparator,
        }}
        className="react-select-container"
        classNamePrefix="react-select"
      />
      {props?.error && <S.Error>{props?.error}</S.Error>}
    </S.Container>
  );
};
