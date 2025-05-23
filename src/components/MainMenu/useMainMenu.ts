import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useMainMenu = () => {
  const [activeNow, setActiveNow] = useState<string>("");
  const navigate = useNavigate();

  return { activeNow, setActiveNow, navigate };
};
