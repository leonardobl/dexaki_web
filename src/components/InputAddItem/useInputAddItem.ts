import { useState } from "react";

export const useInputAddItem = () => {
  const [value, setValue] = useState(0);
  return { value, setValue };
};
